/* eslint-disable operator-linebreak */
export const template = {}

template.schema =
`import { DatabaseTable } from './core'

#tablesCode#
`

template.table =
`export class #modelName# extends DatabaseTable {
  constructor() {
    super({
      schemaName: '#schemaName#',
      tableName: '#tableName#',
      pkeyIndex: #pkeyIndex#,
      columns: [
#columnsCode#
      ],
    })
  }
}`

template.column =
`        {
          #propsCode#
        },`
