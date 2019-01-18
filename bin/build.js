import path from 'path'
import { generateSql } from '../src/code/sql'
import schemaList from '../ymir.config.json'

generateSql({ schemaList, outDir: path.join(__dirname, '../output/sql') })
