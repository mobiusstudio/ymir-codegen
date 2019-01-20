import fs from 'fs'
import mkdirp from 'mkdirp'

const writeFile = ({ buffer, path, filename }) => {
  mkdirp.sync(path)
  fs.writeFileSync(`${path}/${filename}`, buffer)
}

export const generate = ({ suffix, outDir, schemaList, schemaCode = () => {} }) => {
  schemaList.forEach((schema, index) => (writeFile({
    buffer: schemaCode(schema),
    path: outDir,
    filename: `${suffix === '.sql' ? `0${index}.` : ''}${schema.schemaName}${suffix}`,
  })))
}
