/* eslint-disable quotes */
import joi from 'joi'
import { Sql, Jot, Swt, Rul } from './base'

export const string = {
  default: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'string'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.string()').tostring({ req, def }),
    rul: ({ req, def }) => new Rul(joi.string()).torule({ req, def }),
  },

  // maxmin: {
  //   sql: ({ req, def, max }) => new Sql(`varchar(${max})`).tostring({ req, def }),
  //   swt: ({ req, def, max, min }) => new Swt(`type: 'string',\nmaxLength: ${max},\nminLength: ${min}`).tostring({ req, def }),
  //   jot: ({ req, def, max, min }) => new Jot(`joi.string().max(${max}).min(${min})`).tostring({ req, def }),
  //   rul: ({ req, def, max, min }) => new Rul(joi.string().max(max).min(min)).torule({ req, def }),
  // },

  // pattern: {
  //   sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
  //   swt: ({ req, def, pattern }) => new Swt(`type: 'string',\npattern: '${pattern}'`).tostring({ req, def }),
  //   jot: ({ req, def, pattern }) => new Jot(`joi.string().regex(/${pattern}/)`).tostring({ req, def }),
  //   rul: ({ req, def, pattern }) => new Rul(joi.string().regex(pattern)).torule({ req, def }),
  // },

  password: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'string',\nminLength: 6`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.string().min(6)').tostring({ req, def }),
    rul: ({ req, def }) => new Rul(joi.string().min(6)).torule({ req, def }),
  },

  email: {
    sql: ({ req, def }) => new Sql('varchar').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'string',\nformat: 'email'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.string().email()').tostring({ req, def }),
    rul: ({ req, def }) => new Rul(joi.string().email()).torule({ req, def }),
  },
}
