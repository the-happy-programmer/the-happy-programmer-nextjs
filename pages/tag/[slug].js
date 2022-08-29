import { useRouter } from 'next/router'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Meta from '../../components/seo/Meta'
import Headerlayout from '../../widget/Headerlayout'
import { getAllDocs } from '../../lib/courseslib/courseapi'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'

export default function Tags({ categories, posts, tags }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Meta
        title={`${slug} - The Happy Programmer`}
        description={`${slug} Tag - every post which is related to ${slug}`}
      />
      <Headerlayout>
        <MyHeader subtitle="The Happy Programmer" title={slug} posts={posts} />
      </Headerlayout>
      <PostList posts={posts} categories={categories} tags={tags} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const allDocs = getAllDocs('course/blog')
  const { categories, tags } = uniqueArrayItems()

  const posts = allDocs
    .map((a) => ({ link: a.link, meta: a.meta }))
    .filter((a) => a.meta.tags.map((e) => e === params.slug))
  console.log('POSTS', posts)

  return {
    props: {
      posts,
      categories,
      tags,
    },
  }
}

export async function getStaticPaths() {
  const { tags } = uniqueArrayItems()
  return {
    paths: tags.map((tags) => `/tag/${tags.toLowerCase()}`) || [],
    fallback: false,
  }
}
