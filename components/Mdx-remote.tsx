import fs from 'node:fs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getHighlighter } from 'shiki'
import rehypeSlug from 'rehype-slug'

import Image from 'next/image'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlightII from "../assets/moonlight-ii.json"

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
}

export async function CustomMDX(props: any) {
  const options = {
    keepBackground: false,
    theme: moonlightII,

  };
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, options], rehypeSlug ],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
