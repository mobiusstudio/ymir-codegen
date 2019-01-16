class Type {
  constructor({
    str,
    def,
    req,
    sep = ' ',
  }) {
    this.ori = str
    this.str = str
    this.def = def
    this.req = req
    this.sep = sep
  }

  default = () => {
    this.str = [this.str, this.def].join(this.sep)
    return this
  }

  required = () => {
    this.str = [this.str, this.req].join(this.sep)
    return this
  }

  tostring = () => {
    const { str } = this
    this.str = this.ori
    return str
  }
}

export class Sql extends Type {
  constructor(str) {
    super({
      str,
      def: 'DEFAULT #defaultValue#',
      req: 'NOT NULL',
      sep: ' ',
    })
  }
}

export class Joi extends Type {
  constructor(str) {
    super({
      str,
      def: 'default(#defaultValue#)',
      req: 'required()',
      sep: '.',
    })
  }
}

export class Swg extends Type {
  constructor(str) {
    super({
      str,
      def: 'default: #defaultValue#',
      req: 'required: true',
      sep: ',\n',
    })
  }
}
