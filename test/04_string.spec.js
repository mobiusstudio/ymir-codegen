import { check } from './utils'

describe('========== String ==========', () => {
  it('default', () => {
    check({
      t: 'string',
      str: {
        sql: 'varchar',
        joi: 'joi.string()',
        swg: 'type: \'string\'',
      },
    })
  })
  // it('maxmin', () => {
  //   check({
  //     t: 'maxmin',
  //     str: {
  //       sql: 'varchar(#maxValue#)',
  //       joi: 'joi.string().max(#maxValue#).min(#minValue#)',
  //       swg: 'type: \'string\',\nmaxLength: #maxValue#,\nminLength: #minValue#',
  //     },
  //   })
  // })
  // it('pattern', () => {
  //   check({
  //     t: 'pattern',
  //     str: {
  //       sql: 'varchar',
  //       joi: 'joi.string().regex(/#patternValue#/)',
  //       swg: 'type: \'string\',\npattern: \'#patternValue#\'',
  //     },
  //   })
  // })
  it('password', () => {
    check({
      t: 'password',
      str: {
        sql: 'varchar',
        joi: 'joi.string().min(6)',
        swg: 'type: \'string\',\nminLength: 6',
      },
    })
  })
  it('email', () => {
    check({
      t: 'email',
      str: {
        sql: 'varchar',
        joi: 'joi.string().email()',
        swg: 'type: \'string\',\nformat: \'email\'',
      },
    })
  })
})
