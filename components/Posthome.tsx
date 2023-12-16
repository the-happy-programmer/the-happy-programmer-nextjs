import Link from 'next/link'
import type { PostProps } from '../lib/types/blog'

const tagsitter = (tag: string[]) => {
  return tag.map((tag) => (
    <Link
      href={`/tag/${tag}`}
      key={tag}
      className="mr-2.5 cursor-pointer py-0.5 text-xs font-semibold uppercase text-gray-900 text-opacity-60 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {tag}
    </Link>
  ))
}

export default function Posthome({
  post,
  plain,
}: {
  post: PostProps
  plain: boolean
}): JSX.Element {
  const { title, pubDate, author, tags, description } = post.meta
  return (
    <div className="flex flex-col border-b border-gray-900 border-opacity-5 py-8 dark:border-gray-50">
      {plain ? (
        <div className="flex flex-row items-center pb-3">{tagsitter(tags)}</div>
      ) : null}
      <Link
        href={`/${post.link}`}
        className="mr-auto flex w-auto flex-row text-xl font-semibold text-gray-800 hover:underline dark:text-gray-50"
      >
        {title}
      </Link>
      <p className="leading-loose text-gray-900 text-opacity-70 dark:text-gray-50">
        {description}
      </p>
      <div className="pt-3">
        {plain ? (
          <Link
            href={`/author/${author.toLowerCase()}`}
            className="capitalize hover:underline dark:text-gray-50"
          >
            {author}
          </Link>
        ) : null}
        <p className="text-gray-500 dark:text-gray-400">{pubDate}</p>
      </div>
    </div>
  )
}
