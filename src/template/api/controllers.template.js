/* eslint-disable operator-linebreak */
export const template = {}

template.controllers =
`export const ctr = {}

ctr.add#TableName# = async (req, res) => {
  try {
    const { #TableName# } = global.models
    const data = req.swagger.params.data.value
    global.logger.trace('Add new #tableName#', data)
    const object = await new #TableName#().add(data)
    return res.json(object)
  } catch (error) {
    throw error
  }
}

ctr.get#TableName#List = async (req, res) => {
  try {
    const { #TableName# } = global.models
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: '#pkeyName#',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    global.logger.trace('Get #tableName# list', params)
    const items = await new #TableName#().from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}

ctr.get#TableName# = async (req, res) => {
  try {
    const { #TableName# } = global.models
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Get #tableName#', #pkeyName#)
    const object = await new #TableName#().from().where(['#pkeyName# =', ''], #pkeyName#).select().do()
    return res.json(object)
  } catch (error) {
    throw error
  }
}

ctr.update#TableName# = async (req, res) => {
  try {
    const { #TableName# } = global.models
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    const data = req.swagger.params.data.value
    global.logger.trace('Update #tableName#', data)
    const result = await new #TableName#().update({
      data,
      pkeyValue: #pkeyName#,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}

ctr.delete#TableName# = async (req, res) => {
  try {
    const { #TableName# } = global.models
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Delete #tableName#', #pkeyName#)
    const result = await new #TableName#().delete(#pkeyName#)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
`
