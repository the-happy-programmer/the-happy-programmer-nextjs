const ReactDOMServer = require("react-dom/server")
const HtmlToReactParser = require("html-to-react").Parser

export default async function htmltoreact(content) {
  const htmlToReactParser = new HtmlToReactParser()
  const reactElement = htmlToReactParser.parse(content)
  const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement)

  return reactHtml
}
