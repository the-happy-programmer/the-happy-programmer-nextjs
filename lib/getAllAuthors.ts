import { getAllDocs } from './courseslib/courseapi'
import type { PostProps } from './types/blog'

/**
 * @returns {string[]}
 * @description Returns an array of all authors
 */

export const getAllAuthors = (): string[] => {
  const posts = getAllDocs('course/blog')
  const authors = posts.map((doc: PostProps) => doc.meta.author)
  return [...new Set(authors.concat.apply([], authors))] as string[]
}
