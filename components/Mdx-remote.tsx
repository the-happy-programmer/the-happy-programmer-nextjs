import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeSlug from 'rehype-slug'
import tokyonight from '@/assets/tokyo-night-color-theme.json'
import { serialize } from 'next-mdx-remote/serialize'
import moonlightII from '@/assets/moonlight-ii.json'
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
    transformers: [transformerCopyButton],
  }
  return (
    <MDXRemote
      {...props}
      options={{
        parseFrontmatter: false,
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
