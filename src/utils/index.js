import fs from 'fs'
import p from 'path'
import mkdirp from 'mkdirp'

export const writeFile = ({ buffer, path, filename }) => {
  const filepath = p.join(__dirname, path)
  mkdirp.sync(filepath)
  fs.writeFileSync(`${filepath}/${filename}`, buffer)
}
