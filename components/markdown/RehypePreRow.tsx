import { visit } from 'unist-util-visit'

export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children

      if (codeEl.tagName !== 'code') return
      node.raw = codeEl.children?.[0].value
    }
  })
}

export const postProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      for (const child of node.children) {
        if (child.tagName === 'pre') {
          console.log(child.properties['raw'])
          child.properties['raw'] = node.raw
        }
      }
      if (!('data-rehype-pretty-code-fragment' in node.properties)) {
        return
      }
    }
  })
}
