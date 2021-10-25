// import React, { ReactDOMServer } from "react"
// import { Parser, ProcessNodeDefinitions } from "html-to-react"
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const HtmlToReact = require("html-to-react")
const HtmlToReactParser = require("html-to-react").Parser

const isValidNode = function () {
  return true
}

export default async function highlighter(content) {
  const htmlToReactParser = new HtmlToReactParser()
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)

  const processingInstructions = [
    {
      replaceChildren: true,
      shouldProcessNode: function (node) {
        return node.parent && node.parent.name === "pre"
      },
      processNode: function (node, children) {
        return children
      },
    },
    {
      shouldProcessNode: () => true,
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ]

  const reactComponent = htmlToReactParser.parseWithInstructions(
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
