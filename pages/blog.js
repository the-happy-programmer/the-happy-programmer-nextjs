import Head from 'next/head'
import { getAllCategories, getHomePosts } from '../lib/api'
import Headerlayout from '../widget/Headerlayout'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Meta from '../components/Meta'

export default function Home({ posts, category, seo }) {
  return (
    <div>
      <Meta title={seo.title} description={seo.desc} />
      <Headerlayout>
        <Header
          subtitle="Be an expert in programming"
          title="The Happy Programmer"
          posts={posts.edges}
        />
      </Headerlayout>
      <PostList posts={posts.edges} categories={category.edges} />
    </div>
  )
}

export async function getStaticProps() {
  const seo = {
    title: 'The Happy Programmer',
    desc: 'The Happy Programmer is a programming website focused on teaching programming technologies like iOS, Flutter and more. Courses in mobile development daily iOS and Flutter blog posts.',
  }
  const posts = await getHomePosts(1000)
  const category = await getAllCategories()
  return {
    props: { posts: posts.posts, category: category.categories, seo: seo },
  }
}
