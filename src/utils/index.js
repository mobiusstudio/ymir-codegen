import fs from 'fs'
import mkdirp from 'mkdirp'

export const writeFile = ({ buffer, path, filename }) => {
  mkdirp.sync(path)
  fs.writeFileSync(`${path}/${filename}`, buffer)
}
