import { useRouter } from 'next/router'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Headerlayout from '../../widget/Headerlayout'
import Meta from '../../components/seo/Meta'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'
import { getAllDocs } from '../../lib/courseslib/courseapi'

export default function Category({ categories, posts, tags }) {
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

export async function getStaticProps({ params }) {
  const allDocs = getAllDocs('course/blog')
  const { categories, tags } = uniqueArrayItems()

  const posts = allDocs
    .map((a) => ({ link: a.link, meta: a.meta }))
    .filter((a) => a.meta.categories.map((e) => e === params.slug))

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
