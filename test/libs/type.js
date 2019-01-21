export const outputSet = new Set(['sql', 'jot', 'swt'])

export const resSet = new Set(['dir', 'def', 'req', 'dnr'])

export const specSet = new Set(['id-auto', 'id-seq'])

export const attributes = {
  sql: {
    def: 'DEFAULT #defaultValue#',
    req: 'NOT NULL',
    sep: ' ',
  },
  jot: {
    def: 'default(#defaultValue#)',
    req: 'required()',
    sep: '.',
  },
  swt: {
    def: 'default: #defaultValue#',
    req: 'required: true',
    sep: ',\n',
  },
}
