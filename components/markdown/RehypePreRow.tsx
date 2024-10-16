import { visit } from 'unist-util-visit'

export const preProcess = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node?.tagName === 'pre') {
      const [codeEl] = node.children
      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0]?.value || ''
    }
  })
}

const extractText = (nodes: any) => {
  let text = ''

  nodes.forEach((node: any) => {
    if (node.type === 'text') {
      text += node.value
    } else if (node.children) {
      text += extractText(node.children)
    }
  })

  return text
}

export const postProcess = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node?.tagName === 'pre') {
      const [codeEl] = node.children
      node.properties['raw'] = extractText(codeEl.children)
    }
  })
}

function copyChildValueToParent(tree: any) {
  visit(tree, 'element', (node, index, parent) => {
    if (node.tagName === 'child-tag') {
      // Assuming the value you want to copy is in node.properties.value
      const valueToCopy = node.properties.value

      if (
        parent &&
        parent.type === 'element' &&
        parent.tagName === 'parent-tag'
      ) {
        // Copy the value to the parent's data attribute
        parent.properties['data-rehype-pretty-code-title'] = valueToCopy
      }
    }
  })
}
