import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import { postProcess, preProcess } from '@/components/markdown/RehypePreRow'
import { Pre } from '@/components/markdown/Pre'

const components = {
  img: (props: ImageProps) => (
    <Image
      {...props}
      alt={props.alt}
      className="large-text mx-auto"
      height={200}
      width={350}
    />
  ),
  pre: Pre,
}

export async function CustomMDX(props: any) {
  const options = {
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
    transformers: [],
  }
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, options], postProcess],
        },
        options: {},
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
