import { upperFirst } from 'lodash'
import { template } from '../template/model.template'
import { generate } from '../utils'

const columnCode = (column) => {
  const { type, name, alias, foreign, default: def, required } = column
  const props = []
  if (type) props.push(`type: '${type}',`)
  if (name) props.push(`name: '${name}',`)
  if (alias) props.push(`alias: '${alias}',`)
  if (foreign) props.push(`foreign: '${foreign}',`)
  if (def) props.push(`default: '${def}',`)
  if (required) props.push(`required: '${required}',`)
  return template.column.replace(/#propsCode#/g, `${props.join('\n        ')}`)
}

const columnsCode = columns => columns.map(column => columnCode(column)).join('\n')

const tableCode = (table) => {
  const { schemaName, tableName, columns } = table
  return template.table
    .replace(/#TableName#/g, upperFirst(tableName))
    .replace(/#schemaName#/g, schemaName)
    .replace(/#tableName#/g, tableName)
    .replace(/#columnsCode#/g, columnsCode(columns))
}

const tablesCode = tables => tables.map(table => tableCode(table)).join('\n\n')

export const schemaCode = (schema) => {
  const { tables } = schema
  return template.schema.replace(/#tablesCode#/g, tablesCode(tables))
}

export const generateModel = ({ schemaList, outDir }) => (generate({ suffix: '.js', outDir, schemaList, schemaCode }))
