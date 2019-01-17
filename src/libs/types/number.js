/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const number = {
  default: {
    sql: ({ req, def }) => new Sql('double precision').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'number'`).tostring({ req, def }),
  },

  int: {
    sql: ({ req, def }) => new Sql('integer').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().integer()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int32'`).tostring({ req, def }),
  },

  bigint: {
    sql: ({ req, def }) => new Sql('bigint').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().integer()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },

  float: {
    sql: ({ req, def }) => new Sql('real').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().precision()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'number',\nformat: 'float'`).tostring({ req, def }),
  },

  double: {
    sql: ({ req, def }) => new Sql('double precision').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().precision()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
  },

  // numeric: {
  //   sql: ({ req, def }) => new Sql('numeric#numericParameters#').tostring({ req, def }),
  //   joi: ({ req, def }) => new Joi('Joi.number().precision(#scaleValue#)').tostring({ req, def }),
  //   swg: ({ req, def }) => new Swg(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
  // },

  id: {
    sql: ({ req, def }) => new Sql('bigint').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().integer().greater(100000000000000)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },

  'id-auto': {
    sql: schemaName => new Sql('bigint').tostring({ req: true, def: `"${schemaName}".${schemaName}_id()` }),
    joi: ({ req, def }) => new Joi('Joi.number().integer().greater(100000000000000)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },

  'id-seq': {
    sql: () => new Sql('serial').tostring({ req: false, def: null }),
    joi: ({ req, def }) => new Joi('Joi.number().integer()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int32'`).tostring({ req, def }),
  },

  money: {
    sql: ({ req, def }) => new Sql('money').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().precision(2)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
  },

  timestamp: {
    sql: ({ req, def }) => new Sql('timestamp').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.date().timestamp()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },
}
