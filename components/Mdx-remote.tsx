import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import githubDark from '@/assets/gh-dark.json'
import githubLight from '@/assets/gh-light.json'
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
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
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
