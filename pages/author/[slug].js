import {
  author,
  getAllCategories,
  getHomePosts,
  getAllAuthors,
} from '../../lib/api'
import { useRouter } from 'next/router'
import Headerlayout from '../../widget/Headerlayout'
import Header from '../../components/Header'
import PostList from '../../components/PostList'

export default function Author({ posts, categories, search }) {
  const { edges } = posts
  return (
    <div>
      <Headerlayout>
        <Header
          subtitle="The Happy Programmer"
          title={edges[0].node.author.node.firstName}
          posts={search.edges}
        />
      </Headerlayout>
      <PostList posts={posts.edges} categories={categories.categories.edges} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const authorr = await author(params.slug)
  const search = await getHomePosts(1000)
  const categories = await getAllCategories()
  return {
    props: {
      posts: authorr.posts,
      categories: categories,
      search: search.posts,
    },
  }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()
  const { nodes } = authors
  return {
    paths: nodes.map(({ author }) => `${author.node.uri}`) || [],
    fallback: false,
  }
}
