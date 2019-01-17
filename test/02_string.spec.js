import { check } from './utils/check'

describe('========== String ==========', () => {
  const p = 'string'
  it('default', () => {
    const s = 'default'
    check({
      str: {
        sql: 'varchar',
        joi: 'Joi.string()',
        swg: 'type: \'string\'',
      },
      p,
      s,
    })
  })
  it('maxmin', () => {
    const s = 'maxmin'
    check({
      str: {
        sql: 'varchar(#maxValue#)',
        joi: 'Joi.string().max(#maxValue#).min(#minValue#)',
        swg: 'type: \'string\',\nmaxLength: #maxValue#,\nminLength: #minValue#',
      },
      p,
      s,
    })
  })
  it('pattern', () => {
    const s = 'pattern'
    check({
      str: {
        sql: 'varchar',
        joi: 'Joi.string().regex(/#patternValue#/)',
        swg: 'type: \'string\',\npattern: \'#patternValue#\'',
      },
      p,
      s,
    })
  })
  it('password', () => {
    const s = 'password'
    check({
      str: {
        sql: 'varchar',
        joi: 'Joi.string().min(6)',
        swg: 'type: \'string\',\nminLength: 6',
      },
      p,
      s,
    })
  })
  it('email', () => {
    const s = 'email'
    check({
      str: {
        sql: 'varchar',
        joi: 'Joi.string().email()',
        swg: 'type: \'string\',\nformat: \'email\'',
      },
      p,
      s,
    })
  })
})
