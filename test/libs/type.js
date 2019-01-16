export const outputMap = ['sql', 'joi', 'swg']

export const resMap = ['dir', 'def', 'req', 'dnr']

export const attributes = {
  sql: {
    def: 'DEFAULT #defaultValue#',
    req: 'NOT NULL',
    sep: ' ',
  },
  joi: {
    def: 'default(#defaultValue#)',
    req: 'required()',
    sep: '.',
  },
  swg: {
    def: 'default: #defaultValue#',
    req: 'required: true',
    sep: ',\n',
  },
}
