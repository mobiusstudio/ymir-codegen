import { check } from './utils/check'

describe('========== Boolean ==========', () => {
  const p = 'boolean'
  it('default', () => {
    check({
      str: {
        sql: 'boolean',
        joi: 'Joi.boolean()',
        swg: 'type: \'boolean\'',
      },
      p,
    })
  })
})
