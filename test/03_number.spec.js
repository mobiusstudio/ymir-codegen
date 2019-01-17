import { check } from './utils/check'

describe('========== Number ==========', () => {
  it('default', () => {
    check({
      t: 'number',
      str: {
        sql: 'integer',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int32\'',
      },
    })
  })
  it('bigint', () => {
    check({
      t: 'bigint',
      str: {
        sql: 'bigint',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
  it('float', () => {
    check({
      t: 'float',
      str: {
        sql: 'real',
        joi: 'Joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'float\'',
      },
    })
  })
  it('double', () => {
    check({
      t: 'double',
      str: {
        sql: 'double precision',
        joi: 'Joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  it('numeric', () => {
    check({
      t: 'numeric',
      str: {
        sql: 'numeric#numericParameters#',
        joi: 'Joi.number().precision(#scaleValue#)',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  it('id', () => {
    check({
      t: 'id',
      str: {
        sql: 'bigint',
        joi: 'Joi.number().integer().greater(100000000000000)',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
  it('id-auto', () => {
    check({
      t: 'id-auto',
      str: {
        sql: 'bigint NOT NULL DEFAULT "#schemaName#".#schemaName#_id()',
        joi: 'Joi.number().integer().greater(100000000000000)',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
  it('id-seq', () => {
    check({
      t: 'id-seq',
      str: {
        sql: 'serial',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int32\'',
      },
    })
  })
  it('money', () => {
    check({
      t: 'money',
      str: {
        sql: 'money',
        joi: 'Joi.number().precision(2)',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
})
