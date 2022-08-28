import Headerlayout from '../widget/Headerlayout'
import MyHeader from '../components/search/MyHeader'
import PostList from '../components/PostList'
import Meta from '../components/seo/Meta'
import { getAllDocs } from '../lib/courseslib/courseapi'
import { uniqueArrayItems } from '../lib/uniqueArrayItems'
export default function Home({ posts, category, seo, tags, banner }) {
  return (
    <div>
      <Meta title={seo.title} description={seo.desc} />
      <Headerlayout>
        <MyHeader
          subtitle="Be an expert in programming"
          title="The Happy Programmer"
          posts={posts}
        />
      </Headerlayout>
      <PostList
        posts={posts}
        tags={tags}
        categories={category}
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
      'Support Ukrainian children and families through the tough times they are going through',
      'UNICEF Donate',
      'https://www.unicef.org.uk/donate/donate-now-to-protect-children-in-ukraine/?gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X0lPlYwu0E2vfVCEX3x6N4B_IkPi5SvQLlLF65pZgNEnWBTIbX_27caArikEALw_wcB',
    ],
  ]
  const allDocs = getAllDocs('course/blog')
  const posts = allDocs
    .map((a) => ({ link: a.link, meta: a.meta }))
    .sort(
      (a, b) =>
        new Date(b.meta.pubDate).valueOf() - new Date(a.meta.pubDate).valueOf()
    )
  const cattag = uniqueArrayItems(posts)
  return {
    props: {
      posts: posts,
      category: cattag.categories,
      seo: seo,
      tags: cattag.tags,
      banner: banner,
    },
  }
}
