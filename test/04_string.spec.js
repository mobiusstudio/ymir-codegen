import { check } from './utils'

describe('========== String ==========', () => {
  it('default', () => {
    check({
      t: 'string',
      str: {
        sql: 'varchar',
        jot: 'joi.string()',
        swt: 'type: \'string\'',
      },
    })
  })
  // it('maxmin', () => {
  //   check({
  //     t: 'maxmin',
  //     str: {
  //       sql: 'varchar(#maxValue#)',
  //       jot: 'joi.string().max(#maxValue#).min(#minValue#)',
  //       swt: 'type: \'string\',\nmaxLength: #maxValue#,\nminLength: #minValue#',
  //     },
  //   })
  // })
  // it('pattern', () => {
  //   check({
  //     t: 'pattern',
  //     str: {
  //       sql: 'varchar',
  //       jot: 'joi.string().regex(/#patternValue#/)',
  //       swt: 'type: \'string\',\npattern: \'#patternValue#\'',
  //     },
  //   })
  // })
  it('password', () => {
    check({
      t: 'password',
      str: {
        sql: 'varchar',
        jot: 'joi.string().min(6)',
        swt: 'type: \'string\',\nminLength: 6',
      },
    })
  })
  it('email', () => {
    check({
      t: 'email',
      str: {
        sql: 'varchar',
        jot: 'joi.string().email()',
        swt: 'type: \'string\',\nformat: \'email\'',
      },
    })
  })
})
