import HappyLink from '../components/HappyLink'
import Postbody from '../components/PostBody'
import SvgtoReact from '../components/Svgtoreact'
import Subscribe from '../components/home/Subscribe'
import { getPost, getAllPostsWithSlug } from '../lib/api'
import Headerlayout from '../widget/Headerlayout'
import Image from 'next/image'
import { markdownToHtml } from '../lib/courseslib/htmlmarkdown'
import RichDataPost from '../components/seo/RichDataPost'
import Link from 'next/link'
import { getDocBySlug } from '../lib/courseslib/courseapi'

export default function Post({ meta, socials, content, metalinks, subscribe }) {
  const { author, pubDate, tags, categories, title, avatar, description } = meta
  // const { uri } = post.post.featuredImage.node
  const postIcon = (categories) =>
    categories.map((categories) => (
      <div key={categories} className="h-16">
        <SvgtoReact height={60} width={60} class="mr-4" name={categories} />
      </div>
    ))

  return (
    <>
      <RichDataPost
        title={title}
        description={description}
        date={pubDate}
        firstName={author}
        image={'/me.webp'}
        slug={`/${author.toLowerCase()}`}
      />
      <Headerlayout>
        <div className="container flex flex-col items-center px-3 py-3">
          <Link href="/blog">
            <a className="flex flex-row place-self-start fill-current pl-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <SvgtoReact
                className="mr-3 rotate-90 transform self-center "
                name="arrow"
                height="15"
                width="15"
              />
              Back to posts
            </a>
          </Link>
          {postIcon(categories)}
          <h1 className="p-3 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            {title}
          </h1>
          <div className="center flex flex-row">
            <div className="mt-1 place-self-end">
              <Image
                src={avatar}
                height={35}
                width={35}
                alt="Picture of the author"
                className="rounded-full "
              />
            </div>
            <div className="mt-0 flex flex-col pl-2">
              <HappyLink
                href={`author/${author.toLowerCase()}`}
                classes="text-gray-900 dark:text-gray-50 hover:underline"
              >
                {author}
              </HappyLink>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {pubDate}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            {socials.map(([link, names], i) => (
              <div key={link} className="text-gray-500 dark:text-gray-300">
                <HappyLink
                  key={names}
                  href={link}
                  classes="px-1.5 text-accent dark:text-darkaccent hover:underline"
                >
                  {names}
                </HappyLink>
                {socials.length - 1 === i ? '' : '•'}
              </div>
            ))}
          </div>
        </div>
      </Headerlayout>
      <Postbody content={content} />
      <div className="bg-gray-100  dark:bg-gray-800">
        <Subscribe title={subscribe.title} subtitle={subscribe.subtitle} />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const subscribe = {
    title: 'Subscribe',
    subtitle:
      'Subscribe to get notified of new content and course that will come in the near future. In any way, you will not get spammed or your data be shared',
  }

  const socials = [
    ['https://twitter.com/happy_prog', 'twitter'],
    ['https://www.patreon.com/thehappyprogrammer', 'patreon'],
    [
      'https://www.facebook.com/The-Happy-Programmer-106178104593013',
      'facebook',
    ],
    ['https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg', 'youtube'],
  ]

  const post = await getPost(params.slug)
  const e = await getDocBySlug(params.slug, 'course/blog')
  const pp = await markdownToHtml(e.content)
  return {
    props: {
      meta: e.meta,
      socials: socials,
      content: pp,
      subscribe,
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
