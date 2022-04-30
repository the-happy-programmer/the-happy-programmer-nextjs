const fs = require('fs-extra')
import { join } from 'path'
import matter from 'gray-matter'

export const getAllDocs = (directory) => {
  const dir = join(process.cwd(), directory)
  const slugs = fs.readdirSync(dir)
  const docs = slugs.map((slug) => getDocBySlug(slug))
  return docs
}

export const getDocBySlug = (slug, directory) => {
  const dir = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { link: realSlug, meta: data, content }
}

export const getDirectories = (source) => {
  const e = fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
  console.log(e)
  return e
}
