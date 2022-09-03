import { getAllDocs } from './courseslib/courseapi'
import type { PostProps } from './types/blog'

interface UniqueArrayItems {
  categories: string[]
  tags: string[]
}
//@ts-ignore
/**
 * @returns {UniqueArrayItems}
 * @description Returns an object with unique categories and tags
 */

export const uniqueArrayItems = (): UniqueArrayItems => {
  const posts = getAllDocs('course/blog')
  const cat = posts.map((doc: PostProps) => doc.meta.categories)
  const tag = posts.map((doc: PostProps) => doc.meta.tags)

  return {
    categories: [...new Set(cat.concat.apply([], cat))] as string[],
    tags: [...new Set(tag.concat.apply([], tag))] as string[],
  }
}
