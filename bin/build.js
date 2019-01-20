import path from 'path'
import { generateSql, generateModel } from '../src/code'
import schemaList from '../ymir.config.json'

generateSql({ schemaList, outDir: path.join(__dirname, '../output/sql') })
generateModel({ schemaList, outDir: path.join(__dirname, '../output/model') })
