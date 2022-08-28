import Content from '../../components/course/Content'
import {
  getDirectories,
  getDocBySlug,
  getAllinks,
} from '../../lib/courseslib/courseapi'
import SideMenu from '../../components/course/SideMenu'
import CourseHeader from '../../components/course/CourseHeader'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'

export default function Pag({ content, meta, courseslugs }) {
  return (
    <>
      <CourseHeader meta={meta} />
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-row">
          <SideMenu courseslugs={courseslugs} />
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
  
  const courseslugs = await getAllinks(`course/${slug[0]}`)

  const con = await markdownToHtml(content || '')
  return { props: { content: con, meta, courseslugs } }
}

export async function getStaticPaths() {
  const paths = getDirectories(`${process.cwd()}/course`)
  return { paths, fallback: false }
}
