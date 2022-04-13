import { getAllCategories, getHomePosts, getAllTags } from '../lib/api'
import Headerlayout from '../widget/Headerlayout'
import MyHeader from '../components/search/MyHeader'
import PostList from '../components/PostList'
import Meta from '../components/seo/Meta'

export default function Home({ posts, category, seo, tags, banner }) {
  return (
    <div>
      <Meta title={seo.title} description={seo.desc} />
      <Headerlayout>
        <MyHeader
          subtitle="Be an expert in programming"
          title="The Happy Programmer"
          posts={posts.edges}
        />
      </Headerlayout>
      <PostList
        posts={posts.edges}
        tags={tags}
        categories={category.edges}
        banner={banner}
      />
    </div>
  )
}

export async function getStaticProps() {
  const seo = {
    title: 'The Happy Programmer | Blog',
    desc: 'The Happy Programmer is a programming website focused on teaching programming technologies like iOS, Flutter and more. Courses in mobile development daily iOS and Flutter blog posts.',
  }

  const banner = [
    [
      'ukrainianflag',
      'Support Ukrainian children and families through the tough times they are going through',
      'UNICEF Donate',
    ],
  ]

  const posts = await getHomePosts(1000)
  const category = await getAllCategories()
  const tags = await getAllTags()
  return {
    props: {
      posts: posts.posts,
      category: category.categories,
      seo: seo,
      tags: tags.tags.nodes,
      banner: banner,
    },
  }
}
