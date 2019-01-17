/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const string = {
  default: {
    sql: () => new Sql('varchar'),
    joi: () => new Joi('Joi.string()'),
    swg: () => new Swg(`type: 'string'`),
  },

  maxmin: {
    sql: () => new Sql('varchar(#maxValue#)'),
    joi: () => new Joi('Joi.string().max(#maxValue#).min(#minValue#)'),
    swg: () => new Swg(`type: 'string',\nmaxLength: #maxValue#,\nminLength: #minValue#`),
  },

  pattern: {
    sql: () => new Sql('varchar'),
    joi: () => new Joi('Joi.string().regex(/#patternValue#/)'),
    swg: () => new Swg(`type: 'string',\npattern: '#patternValue#'`),
  },

  password: {
    sql: () => new Sql('varchar'),
    joi: () => new Joi('Joi.string().min(6)'),
    swg: () => new Swg(`type: 'string',\nminLength: 6`),
  },

  email: {
    sql: () => new Sql('varchar'),
    joi: () => new Joi('Joi.string().email()'),
    swg: () => new Swg(`type: 'string',\nformat: 'email'`),
  },
}
