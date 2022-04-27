import Content from '../../components/course/Content'
import { getDocBySlug } from '../../lib/courseslib/api'
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
  const { meta, link, content } = await getDocBySlug(slug, '/course/swift')

  const con = await markdownToHtml(content || '')
  return { props: { content: con, meta, link } }
}

export async function getStaticPaths() {
  const paths = ['/course/swift', '/course/swiftui']
  return { paths, fallback: false }
}
