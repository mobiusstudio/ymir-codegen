import Promise from 'bluebird'

const ncp = Promise.promisify(require('ncp'))

const copyApi = async (projectName) => {
  const exclude = [
    '.vscode',
    'build',
    'logs',
    'node_modules',
    'src/config',
    'package-lock.json',
  ]
  const include = [
    'src/config/config.json.sample',
    'src/config/index.js',
  ]
  const folderPath = `../${projectName}-api`
  const options = {
    filter: filename => exclude.every(excludePath => filename.indexOf(`/ymir-api/${excludePath}`) === -1),
  }

  // copy ymir-api
  await ncp('../ymir-api', folderPath, options)

  const cps = []
  include.forEach(includePath => cps.push(ncp(`../ymir-api/${includePath}`, `${folderPath}/${includePath}`)))

  await Promise.all(cps).catch(err => err)
}

export const copy = async (projectName) => {
  console.log('copy ...')
  await copyApi(projectName)
}
