const fs = require('fs-extra')
import { join } from 'path'
import matter from 'gray-matter'

export const getAllDocs = ({ directory }: string) => {
  const dir = join(process.cwd(), directory)
  const slugs = fs.readdirSync(dir)
  const docs = slugs.map((slug) => getDocBySlug(slug, directory))
  return docs.sort(
    (a, b) =>
      new Date(b.meta.pubDate).valueOf() - new Date(a.meta.pubDate).valueOf()
  )
}

export const getDocBySlug = (slug, directory) => {
  const dir = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(dir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { link: realSlug, meta: data, content }
}

export const getDirectories = (source) => {
  console.log('SOURCE:', source)
  const allslugs = []
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const lk = `course/${dirent.name}`
      fs.readdirSync(lk).map((slug) =>
        allslugs.push(
          ('/' + lk + '/' + slug).replace(/\s/g, '').replace(/\.mdx$/, '')
        )
      )
    })
  return allslugs
}

export const getAllinks = (coursename) => {
  const dir = join(process.cwd(), coursename)
  const slugs = fs.readdirSync(dir)
  const ns = slugs.map((slug) => {
    const sl = slug.replace(/\.mdx$/, '')
    return {
      link: `/${coursename}/${sl}`,
      name: sl,
    }
  })
  return ns
}
