/* eslint-disable operator-linebreak */
export const template = {}

template.controllers =
`export const ctr = {}

#funcCode#
`

const func = {}

func.list =
`ctr.get#modelName#List = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: '#pkeyName#',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    global.logger.trace('Get #logName# list', params)
    const items = await new #modelName#().from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}`

func.get =
`ctr.get#modelName# = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Get #logName#', #pkeyName#)
    const result = await new #modelName#().from().where\`#pkey_name# = \${#pkeyName#}\`.do()
    return res.json(result)
  } catch (error) {
    throw error
  }
}`

func.add =
`ctr.add#modelName# = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const data = req.swagger.params.data.value
    global.logger.trace('Add new #logName#', data)
    delete data.#pkeyName#
    const result = await new #modelName#().add({
      data,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}`

func.addChild =
`ctr.add#modelName# = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const data = req.swagger.params.data.value
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Add #logName#', data)
    const result = await new #modelName#().add({
      data,
      pkeyValue: #pkeyName#,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}`

func.update =
`ctr.update#modelName# = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const data = req.swagger.params.data.value
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Update #logName#', data)
    const result = await new #modelName#().update({
      data,
      pkeyValue: #pkeyName#,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}`

func.delete =
`ctr.delete#modelName# = async (req, res) => {
  try {
    const { #modelName# } = global.models
    const #pkeyName# = req.swagger.params.#pkeyName#.value
    global.logger.trace('Delete #logName#', #pkeyName#)
    const result = await new #modelName#().delete(#pkeyName#)
    return res.json(result)
  } catch (error) {
    throw error
  }
}`

template.parentFunc =
`${func.list}
${func.get}
${func.add}
${func.update}
${func.delete}`

template.childFunc =
`${func.get}
${func.addChild}
${func.update}
${func.delete}`
