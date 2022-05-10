import Content from '../../components/course/Content'
import { getDirectories, getDocBySlug } from '../../lib/courseslib/courseapi'
import SideMenu from '../../components/course/SideMenu'
import CourseHeader from '../../components/course/CourseHeader'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'

export default function Pag({ content, meta, slug }) {
  return (
    <>
      <CourseHeader meta={meta} />
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-row">
          <SideMenu slug={slug} />
          <Content content={content} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { meta, link, content } = await getDocBySlug(
    slug[1],
    `course/${slug[0]}`
  )

  const con = await markdownToHtml(content || '')
  return { props: { content: con, meta, slug } }
}

export async function getStaticPaths() {
  const paths = getDirectories(`${process.cwd()}/course`)
  return { paths, fallback: false }
}
