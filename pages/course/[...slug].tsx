import Content from '../../components/about/course/Content'
import {
  getDirectories,
  getDocBySlug,
  getAllinks,
} from '../../lib/courseslib/courseapi'
import SideMenu from '../../components/about/course/SideMenu'
import CourseHeader from '../../components/about/course/CourseHeader'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'
import { CoursesHeader, CoursesSlugs } from '../../lib/types/courses'
import { GetStaticPaths, GetStaticProps } from 'next'
import Subscribe from '../../components/home/Subscribe'

export default function Pag({
  content,
  meta,
  courseslugs,
}: {
  content: string
  meta: CoursesHeader
  courseslugs: CoursesSlugs[]
}): JSX.Element {
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
  console.log('COURSES:', courseslugs)
  return { props: { content: con, meta, courseslugs } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getDirectories(`${process.cwd()}/course`)
  return { paths, fallback: false }
}
