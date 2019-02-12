import { clean } from './clean'
import { copy } from './copy'
import { rename } from './rename'
import { output } from './output'

const build = async (modelName, apiName, dbName) => {
  console.log('start build')
  console.log('cleanup...')
  await clean(modelName, apiName)
  console.log('copy...')
  await copy(modelName, apiName)
  console.log('rename...')
  await rename(modelName, apiName, dbName)
  console.log('output...')
  await output(modelName, apiName)
  console.log('finish build')
}

build('myproject', 'myproject', 'mydatabase')
