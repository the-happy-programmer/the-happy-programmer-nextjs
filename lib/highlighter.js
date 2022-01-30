// import React, { ReactDOMServer } from "react"
// import { Parser, ProcessNodeDefinitions } from "html-to-react"
import NextImage from '../components/NextImage';
import Link from 'next/link';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HtmlToReact = require('html-to-react');
const HtmlToReactParser = require('html-to-react').Parser;

const myImage = {
  figure: NextImage,
};

const myLink = {
  a: Link,
};

const isValidNode = function () {
  return true;
};

export default async function highlighter(content) {
  const htmlToReactParser = new HtmlToReactParser();
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

  const processingInstructions = [
    {
      replaceChildren: true,
      shouldProcessNode: (node) => node.name && myLink[node.name],
      processNode: function (node, children) {
        return children;
      },
    },
    {
      replaceChildren: true,
      shouldProcessNode: (node) => node.name && myLink[node.name],
      processNode: function (node, children) {
        return children;
      },
    },
    {
      shouldProcessNode: () => true,
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];

  const reactComponent = htmlToReactParser.parseWithInstructions(
    content,
    isValidNode,
    processingInstructions
  );
  const reactHtml = ReactDOMServer.renderToStaticMarkup(reactComponent);

  return reactHtml;
}
