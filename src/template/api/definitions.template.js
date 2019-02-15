/* eslint-disable operator-linebreak */
export const template = {}

template.definitions =
`import { BaseDefinitions } from '../../../swagger'
import { #propsImport# } from './properties'

const body = {
  #propsName#
}

class #TableDefinitions# extends BaseDefinitions {
  constructor() {
    super('#tableName#', body)
  }
}

export const def = new #TableDefinitions#()
`

template.property =
`export const #columnName# = {
  description: '#columnDescription#',
  #columnType#
}`
