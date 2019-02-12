import { clean } from './clean'
import { copy } from './copy'
import { output } from './output'

const build = async (modelName, apiName) => {
  console.log('cleanup...')
  await clean(modelName, apiName)
  console.log('copy...')
  await copy(modelName, apiName)
  console.log('output...')
  await output(modelName, apiName)
  console.log('finish build')
}

build('myproject', 'myproject')
