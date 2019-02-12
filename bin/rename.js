import replace from 'replace-in-file'
// import path from 'path'

export const rename = async (modelName, apiName, dbName) => {
  const modelPath = `../${modelName}-models`
  const apiPath = `../${apiName}-api`
  console.log('model rename...')
  await replace({
    files: [
      `${modelPath}/package.json`,
      `${modelPath}/package-lock.json`,
      `${modelPath}/test/config/config.json`,
      `${modelPath}/test/config/config.json.sample`,
    ],
    from: [/ymir-models/g, /"ymir"/g],
    to: [`${modelName}-models`, `"${dbName}"`],
  })
  console.log('api rename...')
  await replace({
    files: [
      `${apiPath}/package.json`,
      `${apiPath}/package-lock.json`,
      `${apiPath}/src/config/config.json.sample`,
      `${apiPath}/src/config/development.json`,
    ],
    from: [/ymir-models/g, /ymir-api/g, /"ymir"/g, /ymir app service/g, /ymir-app-service/g],
    to: [`${modelName}-models`, `${apiName}-api`, `"${dbName}"`, `${apiName} app service`, `${apiName}-app-service`],
  })
}
