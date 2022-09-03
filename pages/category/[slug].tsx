import { useRouter } from 'next/router'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Headerlayout from '../../widget/Headerlayout'
import Meta from '../../components/seo/Meta'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'
import { getAllDocs } from '../../lib/courseslib/courseapi'
import { GetStaticProps } from 'next'
import type { PostProps } from '../../lib/types/blog'

export default function Category({
  categories,
  posts,
  tags,
}: {
  categories: string[]
  tags: string[]
  posts: PostProps[]
}): JSX.Element {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Headerlayout>
        <Meta
          title={`${slug} - The Happy Programmer`}
          description={`${slug} Category - every post which is related to ${slug}`}
        />
        <MyHeader subtitle="The Happy Programmer" title={slug} posts={posts} />
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
    .filter((a: PostProps) => a.meta.categories.map((e) => e === slug))

  return {
    props: {
      posts,
      categories,
      tags,
    },
  }
}

export async function getStaticPaths() {
  const { categories } = uniqueArrayItems()
  return {
    paths:
      categories.map((category) => `/category/${category.toLowerCase()}`) || [],
    fallback: false,
  }
}
