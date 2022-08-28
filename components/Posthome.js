import HappyLink from './HappyLink'

const tags = (tag) => {
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
  return (
    <div className="flex flex-col border-b border-gray-900 border-opacity-5 py-8 dark:border-gray-50">
      {plain ? (
        <div className="flex flex-row items-center pb-3">
          {tags(post.meta.tags)}
        </div>
      ) : null}
      <HappyLink
        href={`/${post.link}`}
        classes="mr-auto flex w-auto flex-row text-xl text-gray-800 font-semibold hover:underline dark:text-gray-50"
      >
        <>{post.meta.title}</>
      </HappyLink>
      <p className="leading-loose text-gray-900 text-opacity-70 dark:text-gray-50">
        {post.meta.description}
      </p>
      <div className="pt-3">
        {plain ? (
          <HappyLink
            href={`/${post.link}`}
            classes="hover:underline dark:text-gray-50"
          >
            {post.meta.author}
          </HappyLink>
        ) : null}
        <p className="text-gray-500 dark:text-gray-400">{post.meta.pubDate}</p>
      </div>
    </div>
  )
}
