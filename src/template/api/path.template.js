/* eslint-disable operator-linebreak */
export const template = {}

template.path =
`/* eslint-disable dot-notation */
import { assemblePath, addTag } from '../../../swagger'
import { #pagingCode# } from '../../../swagger/base/constants'
#pkeyCode#

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create #tableName# data',
  required: true,
  schema: {
    $ref: '#/definitions/#refName#AddRequest',
  },
}

const updateContent = {
  in: 'body',
  name: 'data',
  description: 'update #tableName# data',
  required: true,
  schema: {
    $ref: '#/definitions/#refName#UpdateRequest',
  },
}

const generalDescription = {
  tags: ['#Tag#'],
  consumes: [contentType.json],
  produces: [contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

addTag({
  name: '#Tag#',
})

const routes = {}

#routeCode#

const basePath = '/#pathCode#'
export const pth = assemblePath(routes, basePath)
`

template.parentPkey =
`import { typeMap as T } from '../../../libs/types'

export const #pkeyName# = T.get('#pkeyType#').swg({
  description: '#tableName# #pkeyName#',
  name: '#pkey_name#',
  in: 'path',
  required: true,
})`

template.childPkey = 'import { #parentKey# as #pkeyName# } from \'../../#parentFolder#/path\''

const route = {}

route.list =
`get: {
    operationId: 'get#TableName#List',
    summary: 'Get #tableName# list',
    ...generalDescription,
    parameters: [pagesize, page, next, paging],
  },`

route.get =
`get: {
    operationId: 'get#TableName#',
    summary: 'Get #tableName# by #pkeyName#',
    ...generalDescription,
    parameters: [#pkeyName#],
  },`

route.post =
`post: {
    operationId: 'add#TableName#',
    summary: 'Add new #tableName#',
    ...generalDescription,
    parameters: [addContent],
  },`

route.postById =
`post: {
    operationId: 'add#TableName#',
    summary: 'Add new #tableName#',
    ...generalDescription,
    parameters: [#pkeyName#, addContent],
  },`

route.patch =
`patch: {
    operationId: 'update#TableName#',
    summary: 'Update #tableName#',
    ...generalDescription,
    parameters: [#pkeyName#, updateContent],
  },`

route.delete =
`delete: {
    operationId: 'delete#TableName#',
    summary: 'Delete #tableName#',
    ...generalDescription,
    parameters: [#pkeyName#],
  },`

template.parentRoute =
`routes[''] = {
  ${route.list}
  ${route.post}
}

routes['{#pkey_name#}'] = {
  ${route.get}
  ${route.patch}
  ${route.delete}
}
`

template.childRoute =
`
routes[''] = {
  ${route.get}
  ${route.postById}
  ${route.patch}
  ${route.delete}
}
`
