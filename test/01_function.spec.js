import { find, types, typeMap as T } from '../src/libs/types'
import { outputSet, attributes, specSet } from './libs/type'

describe('========== Function ==========', () => {
  it('find', () => {
    Object.keys(types).forEach((p) => {
      Object.keys(types[p]).forEach((s) => {
        if (s !== 'default') find(s).should.equal(p)
      })
    })
  })
  it('required', () => {
    T.keys((t) => {
      const required = true
      outputSet.forEach((o) => {
        if (!(o === 'sql' && specSet.has(t))) {
          const a = T.get(t)[o]({ req: required, def: null })
          const b = T.get(t)[o]({ req: false, def: null })
                      + attributes[o].sep
                      + attributes[o].req
          a.should.equal(b)
        }
      })
    })
  })

  it('default', () => {
    T.keys((t) => {
      const defaultValue = 'ABCDE12345'
      outputSet.forEach((o) => {
        if (!(o === 'sql' && specSet.has(t))) {
          const a = T.get(t)[o]({ req: false, def: defaultValue })
          const b = T.get(t)[o]({ req: false, def: null })
                      + attributes[o].sep
                      + attributes[o].def
                        .replace('#defaultValue#', defaultValue)
          a.should.equal(b)
        }
      })
    })
  })
})
