import { check } from './utils/check'

describe('========== Number ==========', () => {
  const p = 'number'
  it('default', () => {
    const s = 'default'
    check({
      str: {
        sql: 'integer',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int32\'',
      },
      p,
      s,
    })
  })
  it('bigint', () => {
    const s = 'bigint'
    check({
      str: {
        sql: 'bigint',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
      p,
      s,
    })
  })
  it('float', () => {
    const s = 'float'
    check({
      str: {
        sql: 'real',
        joi: 'Joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'float\'',
      },
      p,
      s,
    })
  })
  it('double', () => {
    const s = 'double'
    check({
      str: {
        sql: 'double precision',
        joi: 'Joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
      p,
      s,
    })
  })
  it('numeric', () => {
    const s = 'numeric'
    check({
      str: {
        sql: 'numeric#numericParameters#',
        joi: 'Joi.number().precision(#scaleValue#)',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
      p,
      s,
    })
  })
  it('id', () => {
    const s = 'id'
    check({
      str: {
        sql: 'bigint',
        joi: 'Joi.number().integer().greater(100000000000000)',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
      p,
      s,
    })
  })
  it('id-auto', () => {
    const s = 'id-auto'
    check({
      str: {
        sql: 'bigint NOT NULL DEFAULT "#schemaName#".#schemaName#_id()',
        joi: 'Joi.number().integer().greater(100000000000000)',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
      p,
      s,
    })
  })
  it('id-seq', () => {
    const s = 'id-seq'
    check({
      str: {
        sql: 'serial',
        joi: 'Joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int32\'',
      },
      p,
      s,
    })
  })
  it('money', () => {
    const s = 'money'
    check({
      str: {
        sql: 'money',
        joi: 'Joi.number().precision(2)',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
      p,
      s,
    })
  })
})
