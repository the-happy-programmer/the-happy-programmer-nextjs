import Headerlayout from '../../widget/Headerlayout'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Meta from '../../components/seo/Meta'
import { getAllDocs } from '../../lib/courseslib/courseapi'
import { getAllAuthors } from '../../lib/getAllAuthors'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'
import type { PostProps } from '../../lib/types/blog'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Author({
  posts,
  categories,
  tags,
}: {
  posts: PostProps[]
  categories: string[]
  tags: string[]
}): JSX.Element {
  return (
    <div>
      <Meta
        title={`${posts[0].meta.author} - The Happy Programmer`}
        description={`${posts[0].meta.author} Author - every post which is related to ${posts[0].meta.author}`}
      />
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={posts[0].meta.author}
          posts={posts}
        />
      </Headerlayout>
      <PostList posts={posts} tags={tags} categories={categories} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const allDocs = getAllDocs('course/blog')
  const { categories, tags } = uniqueArrayItems()

  const posts: PostProps = allDocs
    .map((a: PostProps) => ({ link: a.link, meta: a.meta }))
    .filter((a: PostProps) => a.meta.author.toLowerCase() === slug)

  return {
    props: {
      posts,
      categories,
      tags,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = getAllAuthors()
  return {
    paths: authors.map((author) => `/author/${author.toLowerCase()}`) || [],
    fallback: false,
  }
}
