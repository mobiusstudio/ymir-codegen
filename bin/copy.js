import Promise from 'bluebird'

const ncp = Promise.promisify(require('ncp'))

const copyModel = async (modelName) => {
  const exclude = [
    '.vscode',
    'dist',
    'node_modules',
    'core/libs',
    'src/database/patches/',
    'test/',
  ]
  const include = [
    'src/database/patches/00.base.sql',
    // 'test/mock/models/core.js',
    'test/config',
    'test/utils',
    'test/.eslintrc',
    'test/00_global-hook.spec.js',
  ]
  const folderPath = `../${modelName}-models`
  const options = {
    filter: filename => exclude.every(excludePath => filename.indexOf(`/ymir-models/${excludePath}`) === -1),
  }

  // copy ymir-models
  await ncp('../ymir-models', folderPath, options)

  const cps = []
  include.forEach(includePath => cps.push(ncp(`../ymir-models/${includePath}`, `${folderPath}/${includePath}`)))
  await Promise.all(cps).catch(err => console.log(err))

  // copy libs
  await ncp('./src/libs', `${folderPath}/core/libs`)
}

const copyApi = async (apiName) => {
  const exclude = [
    'package-lock.json',
    '.vscode',
    'build/',
    'node_modules',
    'logs/',
    'src/libs',
  ]
  const include = []
  const folderPath = `../${apiName}-api`
  const options = {
    filter: filename => exclude.every(excludePath => filename.indexOf(`/ymir-api/${excludePath}`) === -1),
  }

  // copy ymir-api
  await ncp('../ymir-api', folderPath, options)

  const cps = []
  include.forEach(includePath => cps.push(ncp(`../ymir-api/${includePath}`, `${folderPath}/${includePath}`)))
  await Promise.all(cps).catch(err => err)

  // copy libs
  await ncp('./src/libs', `${folderPath}/src/libs`)
}

export const copy = async (modelName, apiName) => {
  console.log('copy model...')
  await copyModel(modelName)
  console.log('copy api...')
  await copyApi(apiName)
}
