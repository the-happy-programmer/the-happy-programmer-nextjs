import { useRouter } from 'next/router'
import MyHeader from '../../components/MyHeader'
import PostList from '../../components/PostList'
import {
  category,
  getAllCategories,
  getHomePosts,
  getAllTags,
} from '../../lib/api'
import Meta from '../../components/seo/Meta'
import Headerlayout from '../../widget/Headerlayout'

export default function Category({ categories, posts, search, tags }) {
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
          title={slug}
          posts={search.edges}
        />
      </Headerlayout>
      <PostList
        posts={posts.edges}
        categories={categories.categories.edges}
        tags={tags}
      />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const categories = await getAllCategories()
  const tags = await getAllTags()
  const posts = await category(params.slug)
  const search = await getHomePosts(1000)

  return {
    props: {
      categories: categories,
      posts: posts.posts,
      search: search.posts,
      tags: tags.tags.nodes,
    },
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()
  return {
    paths: tags.tags.nodes.map((node) => `${node.uri}`) || [],
    fallback: false,
  }
}
