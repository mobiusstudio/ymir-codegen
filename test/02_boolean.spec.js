import { check } from './utils'

describe('========== Boolean ==========', () => {
  it('default', () => {
    check({
      t: 'boolean',
      str: {
        sql: 'boolean',
        jot: 'joi.boolean()',
        swt: 'type: \'boolean\'',
      },
    })
  })
})
