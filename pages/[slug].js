import { useRouter } from "next/router"
import Postbody from "../components/post-body"
import { getPost, getAllPostsWithSlug } from "../lib/api"
export default function Post({ post }) {
  return <Postbody content={post.post.content} />
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)
  return {
    props: {
      post: post,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  }
}
