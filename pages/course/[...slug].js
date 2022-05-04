import Content from '../../components/course/Content'
import { getDirectories, getDocBySlug } from '../../lib/courseslib/courseapi'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'

export default function Pag({ content, meta, slug }) {
  return (
    <>
      <Content content={content} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  // console.log('params:', slug[0], slug[1])
  const { meta, link, content } = await getDocBySlug(
    slug[1],
    `course/${slug[0]}`
  )
  // console.log('meta:', meta)

  const con = await markdownToHtml(content || '')
  return { props: { content: con, meta, link } }
}

export async function getStaticPaths() {
  const paths = getDirectories(`${process.cwd()}/course`)

  return { paths, fallback: false }
}
