import Content from '../../components/course/Content'
import { getDocBySlug } from '../../lib/courseslib/api'
import markdownToHtml from '../../lib/courseslib/htmlmarkdown'
export default function Pag({ content }) {
  return (
    <>
      <Content content={content} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { next } = params
  console.log('SLUG', next)
  const doc = getDocBySlug(next, '/course/swift')
  const content = await markdownToHtml(doc.content || '')
  return { props: { content } }
}

export async function getStaticPaths() {
  const paths = ['/course/swift']
  return { paths, fallback: false }
}
