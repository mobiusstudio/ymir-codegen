import { check } from './utils/check'

describe('========== Number ==========', () => {
  it('default', () => {
    check({
      t: 'number',
      str: {
        sql: 'double precision',
        joi: 'joi.number()',
        swg: 'type: \'number\'',
      },
    })
  })
  it('int', () => {
    check({
      t: 'int',
      str: {
        sql: 'integer',
        joi: 'joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int32\'',
      },
    })
  })
  it('bigint', () => {
    check({
      t: 'bigint',
      str: {
        sql: 'bigint',
        joi: 'joi.number().integer()',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
  it('float', () => {
    check({
      t: 'float',
      str: {
        sql: 'real',
        joi: 'joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'float\'',
      },
    })
  })
  it('double', () => {
    check({
      t: 'double',
      str: {
        sql: 'double precision',
        joi: 'joi.number().precision()',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  // it('numeric', () => {
  //   check({
  //     t: 'numeric',
  //     str: {
  //       sql: 'numeric#numericParameters#',
  //       joi: 'joi.number().precision(#scaleValue#)',
  //       swg: 'type: \'number\',\nformat: \'double\'',
  //     },
  //   })
  // })
  it('money', () => {
    check({
      t: 'money',
      str: {
        sql: 'money',
        joi: 'joi.number().precision(2)',
        swg: 'type: \'number\',\nformat: \'double\'',
      },
    })
  })
  it('timestamp', () => {
    check({
      t: 'timestamp',
      str: {
        sql: 'timestamp',
        joi: 'joi.date().timestamp()',
        swg: 'type: \'integer\',\nformat: \'int64\'',
      },
    })
  })
})
