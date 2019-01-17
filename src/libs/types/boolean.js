/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const boolean = {
  default: {
    sql: ({ req, def }) => new Sql('boolean').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.boolean()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'boolean'`).tostring({ req, def }),
  },
}
