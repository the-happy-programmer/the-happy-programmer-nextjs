import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
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

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt}
      className="large-text"
      height={100}
      width={650}
    />
  ),
}

export async function CustomMDX(props: any) {
  const myoptions = {
    keepBackground: false,
    theme: oneDarkPro,
  }
  return (
    <MDXRemote
      {...props}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypePrettyCode, rehypeCodeTitles, myoptions],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
