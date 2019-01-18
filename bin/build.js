import path from 'path'
import { generateSql } from '../src/code/sql'
import { generateModel } from '../src/code/model'
import schemaList from '../ymir.config.json'

generateSql({ schemaList, outDir: path.join(__dirname, '../output/sql') })
generateModel({ schemaList, outDir: path.join(__dirname, '../output/model') })
