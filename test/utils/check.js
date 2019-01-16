import T from '../../src/libs/types'
import { resMap, outputMap } from '../libs/type'
import { tostring } from './tostring'

export const check = ({
  str = {},
  p = '',
  s = null,
}) => {
  const strings = tostring(str)
  const t = s ? T[p][s] : T[p]
  const res = {
    dir: {},
    def: {},
    req: {},
    dnr: {},
  }
  outputMap.forEach((o) => {
    res.dir[o] = t[o].tostring()
    res.def[o] = t[o].default().tostring()
    res.req[o] = t[o].required().tostring()
    res.dnr[o] = t[o].default().required().tostring()
  })
  resMap.forEach((r) => {
    outputMap.forEach((o) => {
      res[r][o].should.equal(strings[r][o])
    })
  })
}
