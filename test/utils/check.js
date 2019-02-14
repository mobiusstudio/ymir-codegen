import { typeMap as T } from 'chaos-library'
import { resSet, outputSet, specSet } from '../libs/type'
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
  outputSet.forEach((o) => {
    if (!(o === 'sql' && specSet.has(t))) {
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
  resSet.forEach((r) => {
    outputSet.forEach((o) => {
      if (strings[r][o]) {
        res[r][o].should.equal(strings[r][o])
      }
    })
  })
}
