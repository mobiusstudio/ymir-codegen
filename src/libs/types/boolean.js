/* eslint-disable quotes */
import joi from 'joi'
import { Sql, Jot, Swt, Joi } from './base'

export const boolean = {
  default: {
    sql: ({ req, def }) => new Sql('boolean').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'boolean'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.boolean()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.boolean()).torule({ req, def }),
  },
}
