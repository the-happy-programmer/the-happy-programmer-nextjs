import Content from '../../components/course/Content'
import Meta from '../../components/seo/Meta'
import { getDirectories, getDocBySlug } from '../../lib/courseslib/courseapi'
import { markdownToHtml } from '../../lib/courseslib/htmlmarkdown'
export default function Pag({ content, meta, slug }) {
  return (
    <>
      <Meta title={meta.title} description={meta.description} />
      <Content content={content} />
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
  return { props: { content: con, meta, link } }
}

export async function getStaticPaths() {
  const paths = getDirectories(`${process.cwd()}/course`)
  return { paths, fallback: false }
}
