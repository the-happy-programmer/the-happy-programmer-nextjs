import { useRouter } from "next/router"
import Header from "../../components/Header"
import PostList from "../../components/PostList"
import { category, getAllCategories, getHomePosts } from "../../lib/api"
import Headerlayout from "../../widget/Headerlayout"

export default function Category({ categories, post, search }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Headerlayout>
        <Header title={slug} posts={search.edges} />
      </Headerlayout>
      <PostList edges={search.edges} category={categories} />
    </div>
  )
}
export async function getStaticProps({ params }) {
  const categories = await getAllCategories()
  const cate = await category(params.slug)
  const search = await getHomePosts(1000)

  return {
    props: { categories: categories, post: cate, search: search.posts },
  }
}

export async function getStaticPaths() {
  const cate = await getAllCategories()

  return {
    paths: cate.categories.edges.map(({ node }) => `${node.uri}`) || [],
    fallback: false,
  }
}
