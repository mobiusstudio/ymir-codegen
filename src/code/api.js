import { upperFirst } from 'lodash'
import { typeMap as T } from 'chaos-library'
import { template } from '../template/api'
import { writeFile } from './generate'

export const apiCode = {}

apiCode.controllers = (table) => {
  const { tableName } = table
  return template.controllers
    .replace(/#tableName#/g, tableName)
    .replace(/#TableName#/g, `${upperFirst(tableName)}`)
    .replace(/#TableControllers#/g, `${upperFirst(tableName)}Controllers`)
}

const propsCode = columns => ({
  import: columns.map(column => column.name).join(', '),
  body: columns.map(column => column.name).join(',\n  ').concat(','),
  properties: columns.map(column => template.property
    .replace(/#columnName#/g, column.name)
    .replace(/#columnType#/g, T.get(column.type).swt({ req: column.required, def: column.default }).concat(','))
    .replace(/#columnDescription#/g, column.description || `${column.tableName} ${column.name}`))
    .join('\n\n'),
})

apiCode.properties = (table) => {
  const { columns } = table
  return propsCode(columns).properties
}

apiCode.definitions = (table) => {
  const { tableName, columns } = table
  return template.definitions
    .replace(/#tableName#/g, tableName)
    .replace(/#TableDefinitions#/g, `${upperFirst(tableName)}Definitions`)
    .replace(/#propsImport#/g, propsCode(columns).import)
    .replace(/#propsName#/g, propsCode(columns).body)
}

apiCode.path = (table) => {
  const { tableName } = table
  return template.path
    .replace(/#TableRoutes#/g, `${upperFirst(tableName)}Routes`)
    .replace(/#TableName#/g, `${upperFirst(tableName)}`)
    .replace(/#tableName#/g, tableName)
}

export const generateApi = ({ schemaList, outDir }) => {
  const apiMap = ['path', 'definitions']
  schemaList.forEach((schema) => {
    const { schemaName, tables } = schema
    const ptable = tables[0]
    tables.forEach((table, tindex) => {
      const { tableName } = table
      const filename = schemaName === tableName ? tableName : `${schemaName}-${tableName}`
      // path & definitions
      apiMap.forEach((i) => {
        writeFile({
          buffer: apiCode[i](table, tindex === 0, ptable),
          path: `${outDir}/api/${filename}/${i}`,
          filename: 'index.js',
        })
      })
      writeFile({
        buffer: apiCode.properties(table),
        path: `${outDir}/api/${filename}/definitions`,
        filename: 'properties.js',
      })
      writeFile({
        buffer: template.index,
        path: `${outDir}/api/${filename}`,
        filename: 'index.js',
      })
      // controllers
      writeFile({
        buffer: apiCode.controllers(table),
        path: `${outDir}/controllers`,
        filename: `${filename}.js`,
      })
      writeFile({
        buffer: template.controllerIndex,
        path: `${outDir}/controllers`,
        filename: 'index.js',
      })
    })
  })
}
