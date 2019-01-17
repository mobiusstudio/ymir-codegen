import { boolean } from './boolean'
import { string } from './string'
import { number } from './number'

export const types = {
  boolean,
  string,
  number,
}

export const find = s => Object.keys(types).find(p => p === s || Object.keys(types[p]).includes(s))
