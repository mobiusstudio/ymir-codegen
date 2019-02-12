import path from 'path'
import { generateSql, generateModel, generateApi } from '../src/code'
import schemaList from '../ymir.config.json'

export const output = (modelName, apiName) => {
  generateSql({ schemaList, outDir: path.join(__dirname, `../../${modelName}-models/src/database/patches`) })
  generateModel({ schemaList, outDir: path.join(__dirname, `../../${modelName}-models/test/mock/models`) })
  generateApi({ schemaList, outDir: path.join(__dirname, `../../${apiName}-api/src/api`) })
}
