import { MDXRemote } from 'next-mdx-remote/rsc'
import {
  BUNDLED_LANGUAGES,
  getHighlighter,
  type HighlighterOptions,
} from 'shiki'

import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
import oneDarkPro from 'shiki/themes/one-dark-pro.json'

const components = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt}
      className="large-text mx-auto"
      height={200}
      width={350}
    />
  ),
}

export async function CustomMDX(props: any) {
  const options = {
    keepBackground: false,
    theme: oneDarkPro,
    highlighter: await getHighlighter({
      theme: 'one-dark-pro',
    }),
  }
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypePrettyCode],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
