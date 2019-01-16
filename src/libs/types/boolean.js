import { Sql, Joi, Swg } from './type'

const boolean = {
  sql: new Sql('boolean'),
  joi: new Joi('Joi.boolean()'),
  swg: new Swg('type: boolean'),
}

export default boolean
