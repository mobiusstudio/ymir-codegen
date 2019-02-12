import Promise from 'bluebird'
import path from 'path'

const ncp = Promise.promisify(require('ncp'))

const copyModel = async (modelName) => {
  const ignoreMap = ['.vscode/', 'dist/', 'node_modules/']
  const folderPath = `../${modelName}-models`
  const options = {
    filter: filename => ignoreMap.every(name => filename.indexOf(path.join('/ymir-models', name)) === -1),
  }
  const cps = [
    ncp('../ymir-models', folderPath, options),
  ]
  await Promise.all(cps)
}

const copyApi = async (apiName) => {
  const ignoreMap = ['.vscode/', 'build/', 'node_modules/', 'logs/']
  const folderPath = `../${apiName}-api`
  const options = {
    filter: filename => ignoreMap.every(name => filename.indexOf(path.join('/ymir-api', name)) === -1),
  }
  const cps = [
    ncp('../ymir-api', folderPath, options),
  ]
  await Promise.all(cps)
}

export const copy = async (modelName, apiName) => {
  console.log('copy model...')
  await copyModel(modelName)
  console.log('copy api...')
  await copyApi(apiName)
}
