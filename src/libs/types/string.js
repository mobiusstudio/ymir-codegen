/* eslint-disable quotes */
import { Sql, Joi, Swg } from './base'

export const string = {
  default: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.string()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'string'`).tostring({ req, def }),
  },

  // maxmin: {
  //   sql: ({ req, def, max }) => new Sql(`varchar(${max})`).tostring({ req, def }),
  //   joi: ({ req, def, max, min }) => new Joi(`Joi.string().max(${max}).min(${min})`).tostring({ req, def }),
  //   swg: ({ req, def, max, min }) => new Swg(`type: 'string',\nmaxLength: ${max},\nminLength: ${min}`).tostring({ req, def }),
  // },

  // pattern: {
  //   sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
  //   joi: ({ req, def, pattern }) => new Joi(`Joi.string().regex(/${pattern}/)`).tostring({ req, def }),
  //   swg: ({ req, def, pattern }) => new Swg(`type: 'string',\npattern: '${pattern}'`).tostring({ req, def }),
  // },

  password: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.string().min(6)').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'string',\nminLength: 6`).tostring({ req, def }),
  },

  email: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    joi: ({ req, def }) => new Joi('Joi.string().email()').tostring({ req, def }),
    swg: ({ req, def }) => new Swg(`type: 'string',\nformat: 'email'`).tostring({ req, def }),
  },
}
