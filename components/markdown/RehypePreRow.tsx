import { visit } from 'unist-util-visit'

export const preProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.tagName === 'pre') {
      const [codeEl] = node.children
      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0]?.value || ''
    }
  })
}

function extractText(nodes) {
  let text = ''

  nodes.forEach((node) => {
    if (node.type === 'text') {
      text += node.value
    } else if (node.children) {
      text += extractText(node.children)
    }
  })

  return text
}

export const postProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.tagName === 'pre') {
      const [codeEl] = node.children
      console.log(codeEl.children)
      node.properties['raw'] = extractText(codeEl.children)
    }
  })
}
