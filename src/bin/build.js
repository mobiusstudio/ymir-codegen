import { generateSql } from '../build/sql'
import schemaList from '../../ymir.config.json'

generateSql({ schemaList, outDir: 'output/sql' })
