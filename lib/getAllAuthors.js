import { getAllDocs } from './courseslib/courseapi'

export const getAllAuthors = async () => {
  const posts = getAllDocs('course/blog')
  const authors = posts.map((doc) => doc.meta.author)
  return [...new Set(authors.concat.apply([], authors))]
}
