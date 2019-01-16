class Type {
  constructor({
    string,
    def,
    required,
    separate = ' ',
  }) {
    this.self = string
    this.def = def.replace(/#/, '#defaultValue#')
    this.req = required
    this.sep = separate
  }

  default = () => {
    this.self = [this.self, this.def].join(this.sep)
    return this
  }

  required = () => {
    this.self = [this.self, this.req].join(this.sep)
    return this
  }

  tostring = () => this.self
}

export class Sql extends Type {
  constructor(string) {
    super({
      string,
      def: 'DEFAULT #',
      required: 'NOT NULL',
      separate: ' ',
    })
  }
}

export class Joi extends Type {
  constructor(string) {
    super({
      string,
      def: 'default(#)',
      required: 'required()',
      separate: '.',
    })
  }
}

export class Swg extends Type {
  constructor(string) {
    super({
      string,
      def: 'default: #',
      required: 'required: true',
      separate: ',\n',
    })
  }
}
