/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const number = {
  default: {
    sql: () => new Sql('double precision'),
    joi: () => new Joi('Joi.number()'),
    swg: () => new Swg(`type: 'number'`),
  },

  int: {
    sql: () => new Sql('integer'),
    joi: () => new Joi('Joi.number().integer()'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int32'`),
  },

  bigint: {
    sql: () => new Sql('bigint'),
    joi: () => new Joi('Joi.number().integer()'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int64'`),
  },

  float: {
    sql: () => new Sql('real'),
    joi: () => new Joi('Joi.number().precision()'),
    swg: () => new Swg(`type: 'number',\nformat: 'float'`),
  },

  double: {
    sql: () => new Sql('double precision'),
    joi: () => new Joi('Joi.number().precision()'),
    swg: () => new Swg(`type: 'number',\nformat: 'double'`),
  },

  numeric: {
    sql: () => new Sql('numeric#numericParameters#'),
    joi: () => new Joi('Joi.number().precision(#scaleValue#)'),
    swg: () => new Swg(`type: 'number',\nformat: 'double'`),
  },

  id: {
    sql: () => new Sql('bigint'),
    joi: () => new Joi('Joi.number().integer().greater(100000000000000)'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int64'`),
  },

  'id-auto': {
    sql: () => new Sql('bigint NOT NULL DEFAULT "#schemaName#".#schemaName#_id()'),
    joi: () => new Joi('Joi.number().integer().greater(100000000000000)'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int64'`),
  },

  'id-seq': {
    sql: () => new Sql('serial'),
    joi: () => new Joi('Joi.number().integer()'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int32'`),
  },

  money: {
    sql: () => new Sql('money'),
    joi: () => new Joi('Joi.number().precision(2)'),
    swg: () => new Swg(`type: 'number',\nformat: 'double'`),
  },

  timestamp: {
    sql: () => new Sql('timestamp'),
    joi: () => new Joi('Joi.date().timestamp()'),
    swg: () => new Swg(`type: 'integer',\nformat: 'int64'`),
  },
}
