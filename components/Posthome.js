import Link from 'next/link'
import HappyLink from './HappyLink'

const tagsitter = (tag) => {
  return tag.map((tag) => (
    <HappyLink
      href={`/tag/${tag}`}
      key={tag}
      classes="mr-2.5 cursor-pointer text-xs py-0.5 font-semibold text-gray-900 text-opacity-60 uppercase hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {tag}
    </HappyLink>
  ))
}

export default function Posthome({ post, plain }) {
  const { title, pubDate, author, tags, description } = post.meta
  return (
    <div className="flex flex-col border-b border-gray-900 border-opacity-5 py-8 dark:border-gray-50">
      {plain ? (
        <div className="flex flex-row items-center pb-3">{tagsitter(tags)}</div>
      ) : null}
      <HappyLink
        href={`/${post.link}`}
        classes="mr-auto flex w-auto flex-row text-xl text-gray-800 font-semibold hover:underline dark:text-gray-50"
      >
        <>{title}</>
      </HappyLink>
      <p className="leading-loose text-gray-900 text-opacity-70 dark:text-gray-50">
        {description}
      </p>
      <div className="pt-3">
        {plain ? (
          <Link href={`/author/${author.toLowerCase()}`}>
            <a className="capitalize hover:underline dark:text-gray-50">
              {author}
            </a>
          </Link>
        ) : null}
        <p className="text-gray-500 dark:text-gray-400">{pubDate}</p>
      </div>
    </div>
  )
}
