import { boolean } from './boolean'
import { string } from './string'
import { number } from './number'

const types = {
  boolean,
  string,
  number,
}

export default types

export const typeMap = new Map()

Object.keys(types).forEach((p) => {
  Object.keys(types[p]).forEach((s) => {
    if (s === 'default') typeMap.set(p, types[p].default)
    else typeMap.set(s, types[p][s])
  })
})
