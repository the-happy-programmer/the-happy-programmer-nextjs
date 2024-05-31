import { MDXRemote } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { CopyButton } from '@/components/markdown/CopyButtont'
import rehypeStringify from 'rehype-stringify'
import {
  postProcess,
  Pre,
  preProcess,
} from '@/components/markdown/RehypePreRow'
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
  pre: ({ children, raw, ...props }) => {
    const lang = props['data-language']
    return (
      <pre {...props}>
        <div className="relative">
          <CopyButton text={raw} />
        </div>
        {children}
      </pre>
    )
  },
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
          rehypePlugins: [
            preProcess,
            [rehypePrettyCode, options],
            rehypeSlug,
            postProcess,
          ],
          format: 'mdx',
        },
        options: {},
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
