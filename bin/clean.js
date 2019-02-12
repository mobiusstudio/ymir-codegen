import del from 'del'

export const clean = async (modelName, apiName) => {
  await del([`../${modelName}-models`, `../${apiName}-api`], { force: true })
}
