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
    if (o !== 'sql' || (t !== 'id-auto' && t !== 'id-seq')) {
      res.dir[o] = T.get(t)[o]({
        req: false,
        def: null,
      })
      res.def[o] = T.get(t)[o]({
        req: false,
        def: '#defaultValue#',
      })
      res.req[o] = T.get(t)[o]({
        req: true,
        def: null,
      })
      res.dnr[o] = T.get(t)[o]({
        req: true,
        def: '#defaultValue#',
      })
    }
  })
  resMap.forEach((r) => {
    outputMap.forEach((o) => {
      if (strings[r][o]) {
        res[r][o].should.equal(strings[r][o])
      }
    })
  })
}
