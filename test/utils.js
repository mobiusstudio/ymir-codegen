export const outputMap = ['sql', 'joi', 'swg']
export const resMap = ['dir', 'def', 'req', 'dnr']

export const tostring = (config) => {
  const strings = {}
  resMap.forEach((r) => {
    strings[r] = {}
    outputMap.forEach((o) => {
      const c = config[o]
      switch (r) {
        case 'dir':
          strings[r][o] = c.key
          break
        case 'def':
          strings[r][o] = [c.key, c.def].join(c.sep)
          break
        case 'req':
          strings[r][o] = [c.key, c.req].join(c.sep)
          break
        case 'dnr':
          strings[r][o] = [c.key, c.def, c.req].join(c.sep)
          break
        default:
          break
      }
    })
  })
  return strings
}
