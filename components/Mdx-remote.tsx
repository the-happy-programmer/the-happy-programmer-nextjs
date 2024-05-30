import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
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
}

export async function CustomMDX(props: any) {
  const options = {
    theme: 'github-light' || 'github-dark',
    transformers: [
      transformerCopyButton({ visibility: 'hover', feedbackDuration: 2_000 }),
    ],
  }
  return (
    <MDXRemote
      {...props}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [rehypeStringify],
          rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
          format: 'mdx',
        },
        options: {},
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
