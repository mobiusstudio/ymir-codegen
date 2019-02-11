import Promise from 'bluebird'

const ncp = Promise.promisify(require('ncp'))

const copyModel = async (modelName) => {
  const cps = [
    ncp('../ymir-models', `../${modelName}-models`),
  ]
  await Promise.all(cps)
}

const copyApi = async (apiName) => {
  const cps = [
    ncp('../ymir-api', `../${apiName}-api`),
  ]
  await Promise.all(cps)
}

export const copy = async (projectName) => {
  console.log('copy model...')
  await copyModel(projectName)
  console.log('copy api...')
  await copyApi(projectName)
}
