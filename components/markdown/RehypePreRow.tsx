import { visit } from 'unist-util-visit'

export const preProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children
      if (codeEl.tagName !== 'code') return

      const rawValue = codeEl.children?.[0]?.value || ''
      node.raw = rawValue
      console.log('preProcess - raw:', rawValue) // Debug log
    }
  })
}

export const postProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'div') {
      if (!('data-rehype-pretty-code-fragment' in node.properties)) {
        return
      }

      for (const child of node.children) {
        if (child.tagName === 'pre') {
          console.log(child.properties['raw'])
          console.log(node.raw)
          child.properties['raw'] = node.raw
        }
      }
    }
  })
}
