import { upperFirst, snakeCase, kebabCase } from 'lodash'
import { template } from '../template/api'
import { writeFile } from './generate'

export const apiCode = {}

apiCode.controllers = (table) => {
  const { tableName, pkeyIndex, columns } = table
  const pkeyName = columns[pkeyIndex].name
  return template.controllers
    .replace(/#tableName#/g, tableName)
    .replace(/#TableName#/g, upperFirst(tableName))
    .replace(/#pkeyName#/g, pkeyName)
}

const propsCode = columns => ({
  import: columns.map(column => column.name).join(', '),
  definition: columns.map(column => column.name).join(',\n    ').concat(','),
  properties: columns.map(column => template.property
    .replace(/#columnName#/g, column.name)
    .replace(/#columnType#/g, column.type)
    .replace(/#columnDescription#/g, column.description || `${column.tableName} ${column.name}`))
    .join('\n\n'),
})

apiCode.properties = (table) => {
  const { columns } = table
  return template.properties.replace(/#propsCode#/g, propsCode(columns).properties)
}

apiCode.definitions = (table) => {
  const { schemaName, tableName, columns } = table
  const refName = schemaName === tableName ? upperFirst(tableName) : `${upperFirst(schemaName)}${upperFirst(tableName)}`
  return template.definitions
    .replace(/#refName#/g, refName)
    .replace(/#tableName#/g, tableName)
    .replace(/#TableName#/g, upperFirst(tableName))
    .replace(/#propsImport#/g, propsCode(columns).import)
    .replace(/#propsName#/g, propsCode(columns).definition)
}

apiCode.path = (table, isPrimary = false, ptable) => {
  const { schemaName, tableName, pkeyIndex, columns } = table
  const pkeyName = columns[pkeyIndex].name
  const pkeyType = columns[pkeyIndex].type
  const ptablePkey = ptable.columns[ptable.pkeyIndex].name
  const refName = schemaName === tableName ? upperFirst(tableName) : `${upperFirst(schemaName)}${upperFirst(tableName)}`
  const pagingCode = isPrimary ? 'contentType, pagesize, page, next, paging' : 'contentType'
  const pkeyCode = isPrimary ? template.parentPkey : template.childPkey
    .replace(/#parentKey#/g, snakeCase(ptablePkey))
    .replace(/#parentFolder#/g, kebabCase(ptable.tableName))
  const routeCode = isPrimary ? template.parentRoute : template.childRoute
  const pathCode = isPrimary ? snakeCase(tableName) : `${snakeCase(ptable.tableName)}/{${snakeCase(ptablePkey)}}/${snakeCase(tableName)}`
  const tag = isPrimary ? upperFirst(tableName) : `${upperFirst(schemaName)}-${upperFirst(tableName)}`
  return template.path
    .replace(/#refName#/g, refName)
    .replace(/#pagingCode#/g, pagingCode)
    .replace(/#pkeyCode#/g, pkeyCode)
    .replace(/#routeCode#/g, routeCode)
    .replace(/#tableName#/g, tableName)
    .replace(/#TableName#/g, upperFirst(tableName))
    .replace(/#table_name#/g, snakeCase(tableName))
    .replace(/#pkeyName#/g, pkeyName)
    .replace(/#pkey_name#/g, snakeCase(pkeyName))
    .replace(/#pkeyType#/g, pkeyType)
    .replace(/#pathCode#/g, pathCode)
    .replace(/#Tag#/g, tag)
}

export const generateApi = ({ schemaList, outDir }) => {
  const apiMap = ['path', 'definitions', 'controllers']
  schemaList.forEach((schema) => {
    const { schemaName, tables } = schema
    const ptable = tables[0]
    tables.forEach((table, tindex) => {
      const { tableName } = table
      const folderName = schemaName === tableName ? tableName : `${schemaName}-${tableName}`
      apiMap.forEach((i) => {
        writeFile({
          buffer: apiCode[i](table, tindex === 0, ptable),
          path: `${outDir}/${folderName}/${i}`,
          filename: 'index.js',
        })
      })
      writeFile({
        buffer: apiCode.properties(table),
        path: `${outDir}/${folderName}/definitions`,
        filename: 'properties.js',
      })
      writeFile({
        buffer: template.index,
        path: `${outDir}/${folderName}`,
        filename: 'index.js',
      })
    })
  })
}
