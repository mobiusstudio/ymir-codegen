import { outputSet, resSet, attributes } from '../libs/type'

export const tostring = (str) => {
  const strings = {}
  resSet.forEach((r) => {
    strings[r] = {}
    outputSet.forEach((o) => {
      if (str[o]) {
        const c = attributes[o]
        switch (r) {
          case 'dir':
            strings[r][o] = str[o]
            break
          case 'def':
            strings[r][o] = [str[o], c.def].join(c.sep)
            break
          case 'req':
            strings[r][o] = [str[o], c.req].join(c.sep)
            break
          case 'dnr':
            strings[r][o] = [str[o], c.req, c.def].join(c.sep)
            break
          default:
            break
        }
      }
    })
  })
  return strings
}
