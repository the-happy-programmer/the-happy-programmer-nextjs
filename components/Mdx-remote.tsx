import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
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
      options={serialize({
        scope: {},
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypePrism, rehypeCodeTitles],
        },
      })}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
