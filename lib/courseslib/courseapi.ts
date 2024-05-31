const fs = require('fs-extra')
import { join } from 'path'
import matter from 'gray-matter'
import { PostProps } from '../types/blog'

/**
 * @description Returns an array of all posts in a directory sorted by date
 * @param {string} directory
 * @returns {PostProps[]}
 */
export const getAllDocs = (directory: string) => {
  const dir = join(process.cwd(), directory)
  const slugs = fs.readdirSync(dir)
  const docs = slugs.map((slug: string) => getDocBySlug(slug, directory))
  return docs.sort(
    (a: PostProps, b: PostProps) =>
      new Date(b.meta.pubDate).valueOf() - new Date(a.meta.pubDate).valueOf()
  )
}

/**
 * @description Returns a single post by slug
 * @param {string} slug
 * @param {string} directory
 * @returns {PostProps}
 */

export const getDocBySlug = (slug: string, directory: string) => {
  const dir = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(dir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { link: realSlug, meta: data, content }
}

/**
 * @description Returns an array of all slugs in a directory
 * @param {string} source
 * @returns {string[]}
 */
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

/**
 * @description Return an with all slugs in a directory
 * @param {string} source
 * @returns { string, string }
 */

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

/**
 * @description Get all links for all courses
 * @param {string} source
 * @returns { string, string }
 */

export const gatAllLinksForCourses = (): string[] => {
  const links = getAllinks('course')
  let allLinks: string[] = []
  links.forEach((element) => {
    if (element.name !== 'blog') {
      const all = getAllinks(element.link.substring(1, element.link.length))
      all.map(({ link, name }) => allLinks.push(link))
    }
  })
  return allLinks
}
