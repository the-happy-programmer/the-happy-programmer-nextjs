import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'

import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
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
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypePrettyCode, rehypeCodeTitles],
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
