import {
  author,
  getAllCategories,
  getHomePosts,
  getAllAuthors,
  getAllTags,
} from '../../lib/api'
import Headerlayout from '../../widget/Headerlayout'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Meta from '../../components/seo/Meta'

export default function Author({ posts, categories, search, tags }) {
  const { edges } = posts
  return (
    <div>
      <Meta
        title={`${edges[0].node.author.node.firstName} - The Happy Programmer`}
        description={`${edges[0].node.author.node.firstName} Author - every post which is related to ${edges[0].node.author.node.firstName}`}
      />
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={edges[0].node.author.node.firstName}
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
  const authorr = await author(params.slug)
  const search = await getHomePosts(1000)
  const categories = await getAllCategories()
  const tags = await getAllTags()

  return {
    props: {
      posts: authorr.posts,
      categories: categories,
      search: search.posts,
      tags: tags.tags.nodes,
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
