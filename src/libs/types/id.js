/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const id = {
  default: {
    sql: ({ req, def }) => new Sql('bigint').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.number().integer().greater(100000000000000)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },

  'id-auto': {
    sql: schemaName => Sql.autoId(schemaName),
    joi: ({ req, def }) => new Joi('Joi.number().integer().greater(100000000000000)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
  },

  'id-seq': {
    sql: () => Sql.seqId(),
    joi: ({ req, def }) => new Joi('Joi.number().integer()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'integer',\nformat: 'int32'`).tostring({ req, def }),
  },
}
