import { category, getAllCategories } from "../../lib/api"

export default function Category({ categories, category }) {
  return <h1>asdasd</h1>
}
export async function getStaticProps({ params }) {
  const categories = await getAllCategories()
  const cate = await category(params.slug)
  console.log("cate", cate)
  return {
    props: { categories: categories, category: cate },
  }
}

export async function getStaticPaths() {
  const cate = await getAllCategories()

  return {
    paths: cate.categories.edges.map(({ node }) => `${node.uri}`) || [],
    fallback: false,
  }
}
