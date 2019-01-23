/* eslint-disable operator-linebreak */
import { template as path } from './path.template'
import { template as definitions } from './definitions.template'
import { template as controllers } from './controllers.template'

export const template = {
  ...path,
  ...definitions,
  ...controllers,
}

template.index =
`import { pth } from './path'
import { def } from './definitions'
import { ctr } from './controllers'

export default {
  pth,
  def,
  ctr,
}
`

template.apiIndex =
`
#importCode#

const api = {
#objCode#
}
`
