import { check } from './utils'

describe('========== Number ==========', () => {
  it('default', () => {
    check({
      t: 'number',
      str: {
        sql: 'double precision',
        jot: 'joi.number()',
        swt: 'type: \'number\'',
      },
    })
  })
  it('int', () => {
    check({
      t: 'int',
      str: {
        sql: 'integer',
        jot: 'joi.number().integer()',
        swt: 'type: \'integer\',\nformat: \'int32\'',
      },
    })
  })
  it('bigint', () => {
    check({
      t: 'bigint',
      str: {
        sql: 'bigint',
        jot: 'joi.number().integer()',
        swt: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
  it('float', () => {
    check({
      t: 'float',
      str: {
        sql: 'real',
        jot: 'joi.number().precision()',
        swt: 'type: \'number\',\nformat: \'float\'',
      },
    })
  })
  it('double', () => {
    check({
      t: 'double',
      str: {
        sql: 'double precision',
        jot: 'joi.number().precision()',
        swt: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  // it('numeric', () => {
  //   check({
  //     t: 'numeric',
  //     str: {
  //       sql: 'numeric#numericParameters#',
  //       jot: 'joi.number().precision(#scaleValue#)',
  //       swt: 'type: \'number\',\nformat: \'double\'',
  //     },
  //   })
  // })
  it('money', () => {
    check({
      t: 'money',
      str: {
        sql: 'money',
        jot: 'joi.number().precision(2)',
        swt: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  it('timestamp', () => {
    check({
      t: 'timestamp',
      str: {
        sql: 'bigint',
        jot: 'joi.date().timestamp()',
        swt: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
})
