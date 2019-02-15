import { clean } from './clean'
import { copy } from './copy'
import { output } from './output'

const build = async (projectName) => {
  console.log('start build')
  await clean(projectName)
  await copy(projectName)
  await output(projectName)
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
