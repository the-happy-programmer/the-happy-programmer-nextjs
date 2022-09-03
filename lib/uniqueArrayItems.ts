import { getAllDocs } from './courseslib/courseapi'
import type { PostProps } from './types/blog'

interface UniqueArrayItems {
  categories: string[]
  tags: string[]
}

export const uniqueArrayItems = (): UniqueArrayItems => {
  const posts = getAllDocs('course/blog')
  const cat = posts.map((doc: PostProps) => doc.meta.categories)
  const tag = posts.map((doc: PostProps) => doc.meta.tags)

  return {
    categories: [...new Set(cat.concat.apply([], cat))],
    tags: [...new Set(tag.concat.apply([], tag))],
  }
}
