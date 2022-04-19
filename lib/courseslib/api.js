const fs = require('fs-extra')
import { join } from 'path'
import matter from 'gray-matter'
export function getAllDocs(directory) {
  const dir = join(process.cwd(), directory)
  const slugs = fs.readdirSync(dir)
  const docs = slugs.map((slug) => getDocBySlug(slug))
  return docs
}

export function getDocBySlug(slug, directory) {
  const dir = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta: data, content }
}
