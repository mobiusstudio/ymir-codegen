import del from 'del'
import { copy } from './copy'
import { output } from './output'

const build = async (projectName = 'myProject') => {
  console.log('cleanup...')
  await del([`../${projectName}-models`, `../${projectName}-api`], { force: true })
  console.log('copy...')
  await copy(projectName)
  console.log('output...')
  await output(projectName)
  console.log('finish build')
}

build()
