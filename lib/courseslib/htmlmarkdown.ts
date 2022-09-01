import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import remarkMdx from 'remark-mdx'
import { VFileCompatible } from 'vfile'
export async function markdownToHtml(markdown: VFileCompatible) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .use(remarkMdx)
    .process(markdown)
  return result.toString()
}
