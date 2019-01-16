import T from '../src/libs/types'
import { resMap, outputMap, tostring } from './utils'

const config = {
  sql: {
    key: 'boolean',
    def: 'DEFAULT #defaultValue#',
    req: 'NOT NULL',
    sep: ' ',
  },
  joi: {
    key: 'Joi.boolean()',
    def: 'default(#defaultValue#)',
    req: 'required()',
    sep: '.',
  },
  swg: {
    key: 'type: boolean',
    def: 'default: #defaultValue#',
    req: 'required: true',
    sep: ',\n',
  },
}
const strings = tostring(config)
describe('========== Boolean ==========', () => {
  it('default', () => {
    const res = {
      dir: {},
      def: {},
      req: {},
      dnr: {},
    }
    outputMap.forEach((o) => {
      res.dir[o] = T.boolean[o].tostring()
      res.def[o] = T.boolean[o].default().tostring()
      res.req[o] = T.boolean[o].required().tostring()
      res.dnr[o] = T.boolean[o].default().required().tostring()
    })
    console.log(res)
    resMap.forEach((r) => {
      outputMap.forEach((o) => {
        res[r][o].should.equal(strings[r][o])
      })
    })
  })
})
