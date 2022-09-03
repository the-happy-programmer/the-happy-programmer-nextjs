import Content from '../../components/course/Content'
import {
  getDirectories,
  getDocBySlug,
  getAllinks,
} from '../../lib/courseslib/courseapi'
import SideMenu from '../../components/course/SideMenu'
import CourseHeader from '../../components/course/CourseHeader'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'
import { CoursesHeader, CoursesSlugs } from '../../lib/types/courses'
import { GetStaticProps } from 'next'

export default function Pag({
  content,
  meta,
  courseslugs,
}: {
  content: string
  meta: CoursesHeader
  courseslugs: CoursesSlugs[]
}): JSX.Element {
  console.log('META', meta)
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string[] }
  const { meta, content } = getDocBySlug(slug[1], `course/${slug[0]}`)

  const courseslugs = getAllinks(`course/${slug[0]}`)

  const con = await markdownToHtml(content || '')
  return { props: { content: con, meta, courseslugs } }
}

export async function getStaticPaths() {
  const paths = getDirectories(`${process.cwd()}/course`)
  return { paths, fallback: false }
}
