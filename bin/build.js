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

const commander = () => {
  const args = process.argv.slice(2)
  if (!args.length) build('myproject', 'myproject', 'mydatabase')
  if (args.length === 1) build(args[0], args[0], args[0])
  if (args.length === 2) build(args[0], args[1], args[0])
  if (args.length === 3) build(args[0], args[1], args[2])
}

commander()
