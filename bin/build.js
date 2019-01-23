import path from 'path'
import { generateSql, generateModel, generateApi } from '../src/code'
import schemaList from '../ymir.config.json'

generateSql({ schemaList, outDir: path.join(__dirname, '../output/sql') })
generateModel({ schemaList, outDir: path.join(__dirname, '../output/model') })
generateApi({ schemaList, outDir: path.join(__dirname, '../../ymir-api/src/api') })
