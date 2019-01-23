/* eslint-disable operator-linebreak */
export const template = {}

template.definitions =
`import { typeMap as T } from '../../../libs/types'
import { #propsImport# } from './properties'

export const def = {}

def.#refName#AddRequest = T.get('object').swg({
  description: 'create #tableName# request',
  properties: {
    #propsName#
  },
})

def.#refName#UpdateRequest = T.get('object').swg({
  description: 'update #tableName# request',
  properties: {
    #propsName#
  },
})
`

template.properties =
`import { typeMap as T } from '../../../libs/types'

#propsCode#
`
template.property =
`export const #columnName# = T.get('#columnType#').swg({
  description: '#columnDescription#',
})`
