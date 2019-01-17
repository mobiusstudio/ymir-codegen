import { find, types, typeMap as T } from '../src/libs/types'
import { outputMap } from './libs/type'

describe('========== Function ==========', () => {
  it('find', () => {
    Object.keys(types).forEach((p) => {
      Object.keys(types[p]).forEach((s) => {
        if (s !== 'default') find(s).should.equal(p)
      })
    })
  })

  it('default', () => {
    T.forEach((t) => {
      const defaultValue = 'ABCDE12345'
      outputMap.forEach((o) => {
        const a = t[o]().default(defaultValue).tostring()
        const b = t[o]().default().tostring().replace('#defaultValue#', defaultValue)
        a.should.equal(b)
      })
    })
  })
})
