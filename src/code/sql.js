import { snakeCase } from 'lodash'
import { typeMap as T } from '../libs/types'
import { template } from '../template/sql.template'
import { generate } from '../utils'

const snakeCaseAll = (schemaList) => {
  const newList = schemaList.map((schema) => {
    const newSchema = schema
    const { schemaName, tables } = newSchema
    newSchema.schemaName = snakeCase(schemaName)
    newSchema.tables = tables.map((table) => {
      const newTable = table
      const { tableName, columns } = newTable
      newTable.schemaName = snakeCase(schemaName)
      newTable.tableName = snakeCase(tableName)
      newTable.columns = columns.map((column) => {
        const newColumn = column
        const { name } = newColumn
        newColumn.schemaName = snakeCase(schemaName)
        newColumn.tableName = snakeCase(tableName)
        newColumn.name = snakeCase(name)
        return newColumn
      })
      return newTable
    })
    return newSchema
  })
  return newList
}


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
  const { schemaName, tableName, pkeyIndex, columns } = table
  const pkey = columns.splice(pkeyIndex, 1)[0]
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
  const { schemaName, tables } = schema
  return template.schema.replace(/#schemaName#/g, schemaName).replace(/#tablesCode#/g, tablesCode(tables))
}

export const generateSql = ({ schemaList, outDir }) => (generate({ suffix: '.sql', outDir, schemaList: snakeCaseAll(schemaList), schemaCode }))
