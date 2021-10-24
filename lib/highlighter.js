// import React, { ReactDOMServer } from "react"
// import { Parser, ProcessNodeDefinitions } from "html-to-react"
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const HtmlToReact = require("html-to-react")
const HtmlToReactParser = require("html-to-react").Parser

const isValidNode = function () {
  return true
}

export default function highlighter(content) {
  const Par = new HtmlToReactParser()
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)

  const processingInstructions = [
    {
      shouldProcessNode: function (node) {
        return node.parent && node.parent.name && node.parent.name === "pre"
      },
      processNode: function (node, children) {
        return node.data.toUpperCase()
      },
    },
    {
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ]

  const reactComponent = Par.parseWithInstructions(
    content,
    isValidNode,
    processingInstructions
  )
  const reactHtml = ReactDOMServer.renderToStaticMarkup(reactComponent)

  return reactHtml
}

// export default function highlighter(content) {
//   const e = new Parser()
//   const ReactElement = e.parse(content)
//   const contents = renderToStaticMarkup(ReactElement)
//   return contents
// }
