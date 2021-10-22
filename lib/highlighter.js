import { renderToStaticMarkup } from "react-dom/server"
import { Parser } from "html-to-react"
import Prism from "Prismjs"
import "prismjs/components/prism-jsx.min"
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js"

export default function highlighter(content) {
  const e = new Parser()
  const ReactElement = e.parse(content)
  const contents = renderToStaticMarkup(ReactElement)
  return contents
}
