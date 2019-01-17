import { types } from '../../src/libs/types'
import { resMap, outputMap } from '../libs/type'
import { tostring } from './tostring'

const typeMap = new Map()

Object.keys(types).forEach((p) => {
  Object.keys(types[p]).forEach((s) => {
    if (s === 'default') typeMap.set(p, types[p].default)
    else typeMap.set(s, types[p][s])
  })
})

export const check = ({
  t = '',
  str = {},
}) => {
  const strings = tostring(str)
  const res = {
    dir: {},
    def: {},
    req: {},
    dnr: {},
  }
  outputMap.forEach((o) => {
    res.dir[o] = typeMap.get(t)[o].tostring()
    res.def[o] = typeMap.get(t)[o].default().tostring()
    res.req[o] = typeMap.get(t)[o].required().tostring()
    res.dnr[o] = typeMap.get(t)[o].default().required().tostring()
  })
  resMap.forEach((r) => {
    outputMap.forEach((o) => {
      res[r][o].should.equal(strings[r][o])
    })
  })
}
