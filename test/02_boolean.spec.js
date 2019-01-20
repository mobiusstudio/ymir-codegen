import { check } from './utils'

describe('========== Boolean ==========', () => {
  it('default', () => {
    check({
      t: 'boolean',
      str: {
        sql: 'boolean',
        joi: 'joi.boolean()',
        swg: 'type: \'boolean\'',
      },
    })
  })
})
