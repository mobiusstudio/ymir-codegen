import joi from 'joi'

const schemaName = joi.string().required()
const tableName = joi.string().required()

export const schemaRules = {
  column: joi.object().keys({
    schemaName,
    tableName,
    type: joi.string().required(),
    name: joi.string().required(),
    alias: joi.string().allow(null),
    foreign: joi.string().allow(null),
    required: joi.boolean().allow(null),
    default: joi.any().valid([
      joi.number(),
      joi.string(),
      joi.boolean(),
      joi.array(),
    ]),
  }),
  table: joi.object().keys({
    schemaName,
    tableName,
    pkeyIndex: joi.number().integer().min(0),
    columns: joi.array(),
  }),
  schema: joi.object().keys({
    schemaName,
    tables: joi.array(),
  }),
}
