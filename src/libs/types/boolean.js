/* eslint-disable quotes */
import joi from 'joi'
import { Sql, Jot, Swt, Rul } from './base'

export const boolean = {
  default: {
    sql: ({ req, def }) => new Sql('boolean').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'boolean'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.boolean()').tostring({ req, def }),
    rul: ({ req, def }) => new Rul(joi.boolean()).torule({ req, def }),
  },
}
