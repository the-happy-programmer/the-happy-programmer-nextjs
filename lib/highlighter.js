import { renderToStaticMarkup } from "react-dom/server"
import { Parser } from "html-to-react"

export default function highlighter(content) {
  const e = new Parser()
  const ReactElement = e.parse(content)
  const contents = renderToStaticMarkup(ReactElement)

  return contents
}
