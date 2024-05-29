import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlightII from '../assets/moonlight-ii.json'
import { Code } from './Code'
import rehypeSlug from 'rehype-slug'
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
  pre: (props: any) => <Code code="`const numbers = [1, 2, 3]{:js}`" />,
}

export async function CustomMDX(props: any) {
  const options = {
    keepBackground: false,
    theme: moonlightII,
  }
  return (
    <MDXRemote
      {...props}
      options={{
        // mdxOptions: {
        //   remarkPlugins: [],
        //   rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
        // },
        parseFrontmatter: false,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
