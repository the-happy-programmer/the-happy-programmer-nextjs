import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import { readFileSync } from 'fs'
import moonlightII from '../assets/moonlight-ii.json'
import tokyoNightColor from '../assets/tokyo-night-color-theme.json'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeSlug from 'rehype-slug'
import { transformer } from 'zod'
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
    theme: 'tokyo-night',
    transformers: [transformerCopyButton({ visibility: 'hover' })],
  }
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
        },
        parseFrontmatter: true,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
