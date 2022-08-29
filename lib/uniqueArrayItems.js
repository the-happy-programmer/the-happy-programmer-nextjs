import { getAllDocs } from './courseslib/courseapi'

export const uniqueArrayItems = () => {
  const posts = getAllDocs('course/blog')
  const cat = posts.map((doc) => doc.meta.categories)
  const tag = posts.map((doc) => doc.meta.tags)
  return {
    categories: [...new Set(cat.concat.apply([], cat))],
    tags: [...new Set(tag.concat.apply([], tag))],
  }
}
