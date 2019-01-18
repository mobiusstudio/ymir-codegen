/* eslint-disable operator-linebreak */
export const template = {}

template.schema =
`import { DatabaseTable, Column, ColumnArray } from './core'

#tablesCode#
`


template.table =
`export class #TableName# extends DatabaseTable {
  constructor() {
    super('#schemaName#', '#tableName#')
    this.columns = new ColumnArray([
#columnsCode#
    ], this.tableName)
  }
}`

template.column =
`      new Column({
        #propsCode#
      }),`
