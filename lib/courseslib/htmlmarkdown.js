import { remark } from 'remark'
import html from 'remark-html'

export default async function htmlmarkdown(content) {
  const result = await remark().use(html).process(mark)
  return result.toString()
}
