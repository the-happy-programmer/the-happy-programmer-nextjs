const fs = require('fs-extra')
import { join } from 'path'
import matter from 'gray-matter'
import { PostProps } from '../types/blog'

export const getAllDocs = (directory: string) => {
  const dir = join(process.cwd(), directory)
  const slugs = fs.readdirSync(dir)
  const docs = slugs.map((slug: string) => getDocBySlug(slug, directory))
  return docs.sort(
    (a: PostProps, b: PostProps) =>
      new Date(b.meta.pubDate).valueOf() - new Date(a.meta.pubDate).valueOf()
  )
}

export const getDocBySlug = (slug: string, directory: string) => {
  const dir = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(dir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { link: realSlug, meta: data, content }
}

export const getDirectories = (source: string): string[] => {
  const allslugs: string[] = []
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent: { isDirectory: () => any }) => {
      return dirent.isDirectory()
    })
    .map((dirent: { name: string }) => {
      const lk = `course/${dirent.name}`
      fs.readdirSync(lk).map((slug: string) =>
        allslugs.push(
          ('/' + lk + '/' + slug).replace(/\s/g, '').replace(/\.mdx$/, '')
        )
      )
    })
  return allslugs
}

export const getAllinks = (
  coursename: string
): [{ link: string; name: string }] => {
  const dir = join(process.cwd(), coursename)
  const slugs = fs.readdirSync(dir)
  const ns = slugs.map((slug: string) => {
    const sl = slug.replace(/\.mdx$/, '')
    return {
      link: `/${coursename}/${sl}`,
      name: sl,
    }
  })
  return ns
}
