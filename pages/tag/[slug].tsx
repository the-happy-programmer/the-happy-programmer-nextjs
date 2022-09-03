import { useRouter } from 'next/router'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Meta from '../../components/seo/Meta'
import Headerlayout from '../../widget/Headerlayout'
import { getAllDocs } from '../../lib/courseslib/courseapi'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostProps } from '../../lib/types/blog'

export default function Tags({
  categories,
  posts,
  tags,
}: {
  categories: string[]
  posts: PostProps[]
  tags: string[]
}): JSX.Element {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Meta
        title={`${slug} - The Happy Programmer`}
        description={`${slug} Tag - every post which is related to ${slug}`}
      />
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={slug as string}
          posts={posts}
        />
      </Headerlayout>
      <PostList
        posts={posts}
        categories={categories}
        tags={tags}
        banner={undefined}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const allDocs = getAllDocs('course/blog')
  const { categories, tags } = uniqueArrayItems()

  const posts: PostProps = allDocs
    .map((a: PostProps) => ({ link: a.link, meta: a.meta }))
    .filter((a: PostProps) => a.meta.tags.map((e) => e === slug))

  return {
    props: {
      posts,
      categories,
      tags,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { tags } = uniqueArrayItems()
  return {
    paths: tags.map((tags) => `/tag/${tags.toLowerCase()}`) || [],
    fallback: false,
  }
}
