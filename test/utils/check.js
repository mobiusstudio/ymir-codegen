import { typeMap as T } from '../../src/libs/types'
import { resMap, outputMap } from '../libs/type'
import { tostring } from './tostring'

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
    res.dir[o] = T.get(t)[o].tostring()
    res.def[o] = T.get(t)[o].default().tostring()
    res.req[o] = T.get(t)[o].required().tostring()
    res.dnr[o] = T.get(t)[o].default().required().tostring()
  })
  resMap.forEach((r) => {
    outputMap.forEach((o) => {
      res[r][o].should.equal(strings[r][o])
    })
  })
}
