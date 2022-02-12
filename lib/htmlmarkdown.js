import TurndownService from 'turndown'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function htmlmarkdown(content) {
  const e = new TurndownService()
  const mark = e.turndown(content)
  const result = await remark().use(html).use(prism).process(mark)

  return result.toString()
}
