import Headerlayout from '../../widget/Headerlayout'
import MyHeader from '../../components/search/MyHeader'
import PostList from '../../components/PostList'
import Meta from '../../components/seo/Meta'
import { getAllDocs } from '../../lib/courseslib/courseapi'
import { getAllAuthors } from '../../lib/getAllAuthors'
import { uniqueArrayItems } from '../../lib/uniqueArrayItems'
export default function Author({ posts, categories, tags }) {
  return (
    <div>
      <Meta
        title={`${posts[0].meta.author} - The Happy Programmer`}
        description={`${posts[0].meta.author} Author - every post which is related to ${posts[0].meta.author}`}
      />
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={posts[0].meta.author}
          posts={posts}
        />
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
    .filter((a) => a.meta.author.toLowerCase() === params.slug)

  return {
    props: {
      posts,
      categories,
      tags,
    },
  }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()
  return {
    paths: authors.map((author) => `/author/${author.toLowerCase()}`) || [],
    fallback: false,
  }
}
