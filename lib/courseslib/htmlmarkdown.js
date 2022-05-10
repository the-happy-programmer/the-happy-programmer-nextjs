import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import remarkToc from 'remark-toc'

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .use(remarkToc)
    .process(markdown)
  console.log('RESULT:', result)
  return result.toString()
}
