import { useRouter } from 'next/router'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import {
  category,
  getAllCategories,
  getHomePosts,
  getAllTags,
} from '../../lib/api'
import Headerlayout from '../../widget/Headerlayout'

export default function Category({ categories, posts, search, tags }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Headerlayout>
        <Header
          subtitle="The Happy Programmer"
          title={slug}
          posts={search.edges}
        />
      </Headerlayout>
      <PostList
        posts={posts.edges}
        tags={tags}
        categories={categories.categories.edges}
      />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const categories = await getAllCategories()
  const posts = await category(params.slug)
  const search = await getHomePosts(1000)
  const tags = await getAllTags()

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
  const cate = await getAllCategories()
  return {
    paths: cate.categories.edges.map(({ node }) => `${node.uri}`) || [],
    fallback: false,
  }
}
