import { snakeCase, without, cloneDeep } from 'lodash'
import { typeMap as T } from '../libs/types'
import { template } from '../template/sql.template'
import { generate } from '../utils'

const snakeCaseSchema = (schema) => {
  const tempSchema = cloneDeep(schema)
  const { schemaName, tables } = tempSchema
  tempSchema.schemaName = snakeCase(schemaName)
  tempSchema.tables = tables.map((table) => {
    const tempTable = table
    const { tableName, columns } = tempTable
    tempTable.schemaName = snakeCase(schemaName)
    tempTable.tableName = snakeCase(tableName)
    tempTable.columns = columns.map((column) => {
      const tempColumn = column
      const { name } = tempColumn
      tempColumn.schemaName = snakeCase(schemaName)
      tempColumn.tableName = snakeCase(tableName)
      tempColumn.name = snakeCase(name)
      return tempColumn
    })
    return tempTable
  })
  return tempSchema
}

// const snakeCaseAll = schemaList => schemaList.map(schema => snakeCaseSchema(schema))

const timeCode = (createTime = true, lastUpdateTime = true) => {
  const arr = []
  if (createTime) arr.push('create_time timestamp DEFAULT unix_now()')
  if (lastUpdateTime) arr.push('last_update_time timestamp DEFAULT unix_now()')
  return arr.join(',\n  ')
}

const foreignCode = (foreign) => {
  // console.log(foreign.split('.'))
  const [schemaName, tableName] = foreign.split('.').map(i => snakeCase(i))
  return `"${schemaName}".${tableName}`
}


const pkeyCode = (pkey) => {
  const { schemaName, type, name, foreign, def } = pkey
  const arr = []
  arr.push(name)
  switch (type) {
    case 'id-auto': arr.push(T.get(type).sql(schemaName)); break
    case 'id-seq': arr.push(T.get(type).sql()); break
    default: arr.push(T.get(type).sql({ req: true, def })); break
  }
  if (foreign && typeof foreign === 'string') arr.push(`REFERENCE ${foreignCode(foreign)}`)
  return arr.join(' ')
}

const columnCode = (column) => {
  const { type, name, foreign, default: def, required } = column
  const arr = []
  if (name && typeof name === 'string') arr.push(name)
  else throw new Error('Invalid column name')
  const req = required === true || required === 'true' || required === 1
  arr.push(T.get(type).sql({ req, def }))
  if (foreign && typeof foreign === 'string') arr.push(`REFERENCE ${foreignCode(foreign)}`)
  return arr.join(' ')
}

const columnsCode = (columns) => {
  const arr = []
  columns.forEach((column) => {
    arr.push(columnCode(column))
  })
  return arr.join(',\n  ')
}

const tableCode = (table) => {
  const { schemaName, tableName, pkeyIndex, columns: tempColumns } = table
  const pkey = tempColumns[pkeyIndex]
  const columns = without(tempColumns, pkey)
  return template.table.replace(/#schemaName#/g, schemaName)
    .replace(/#tableName#/g, tableName)
    .replace(/#pkeyCode#/g, pkeyCode(pkey))
    .replace(/#columnsCode#/g, columnsCode(columns))
    .replace(/#timeCode#/g, timeCode())
    .replace(/#pkeyName#/g, pkey.name)
}

const tablesCode = (tables) => {
  const arr = []
  tables.forEach((table) => {
    arr.push(tableCode(table))
  })
  return arr.join('\n\n')
}

export const schemaCode = (schema) => {
  const { schemaName, tables } = snakeCaseSchema(schema)
  return template.schema.replace(/#schemaName#/g, schemaName).replace(/#tablesCode#/g, tablesCode(tables))
}

export const generateSql = ({ schemaList, outDir }) => (generate({ suffix: '.sql', outDir, schemaList, schemaCode }))
