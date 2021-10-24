import HappyLink from "../components/HappyLink"
import Postbody from "../components/PostBody"
import SvgtoReact from "../components/Svgtoreact"
import { getPost, getAllPostsWithSlug } from "../lib/api"
import Headerlayout from "../widget/Headerlayout"
import Image from "next/image"
import highlighter from "../lib/highlighter"
export default function Post({ post, socials, content }) {
  const { author, date, tags, title } = post.post
  const { firstName, avatar } = author.node
  const dt = (date) => new Date(date).toDateString()

  const postIcon = (tag) =>
    tag.map((tag) => (
      <SvgtoReact
        key={tag.name}
        height={60}
        width={60}
        class='mr-4'
        name={tag.name.toLowerCase()}
      />
    ))
  return (
    <>
      <Headerlayout>
        <div className='container flex px-3 py-3 flex-col items-center'>
          <HappyLink
            href='/'
            classes='fill-current text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 place-self-start'
          >
            <a className='pl-4 flex flex-row '>
              <SvgtoReact
                className='transform rotate-90 self-center mr-3 '
                name='arrow'
                height='15'
                width='15'
              />
              Back to posts
            </a>
          </HappyLink>
          {postIcon(tags.nodes)}
          <h1 className='text-3xl font-bold p-3 text-gray-900 dark:text-gray-50'>
            {title}
          </h1>
          <div className='flex flex-row center'>
            <div className='place-self-end mt-1'>
              <Image
                src={avatar.url}
                height={35}
                width={35}
                alt='Picture of the author'
                className='rounded-full '
              />
            </div>
            <div className='pl-2 flex flex-col mt-0'>
              <p className='text-gray-900 dark:text-gray-50'>{firstName}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                {dt(date)}
              </p>
            </div>
          </div>
          <div className='mt-4 flex flex-row'>
            {socials.map(([link, names], i) => (
              <div key={link} className='text-gray-500 dark:text-gray-300'>
                <HappyLink
                  key={names}
                  href={link}
                  classes='px-1.5 text-accent dark:text-darkaccent hover:underline'
                >
                  {names}
                </HappyLink>
                {socials.length - 1 === i ? "" : "•"}
              </div>
            ))}
          </div>
        </div>
      </Headerlayout>
      <Postbody content={content} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const socials = [
    ["https://twitter.com/happy_prog", "twitter"],
    ["https://www.patreon.com/thehappyprogrammer", "patreon"],
    [
      "https://www.facebook.com/The-Happy-Programmer-106178104593013",
      "facebook",
    ],
    ["https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA", "youtube"],
  ]
  const post = await getPost(params.slug)
  const content = highlighter(post.post.content)
  return {
    props: {
      post: post,
      socials: socials,
      content: content,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  }
}
