/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const boolean = {
  default: {
    sql: new Sql('boolean'),
    joi: new Joi('Joi.boolean()'),
    swg: new Swg(`type: 'boolean'`),
  },
}
