import HappyLink from './HappyLink'

const categories = (cat) => {
  return cat.map((categories) => (
    <HappyLink
      href={`${categories.uri}`}
      key={categories.uri}
      classes="mr-2.5 cursor-pointer text-xs py-0.5 font-semibold text-gray-900 text-opacity-50 uppercase hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {categories.name}
    </HappyLink>
  ))
}

export default function Posthome({ post, plain }) {
  const dt = (date) => new Date(date).toDateString()

  return (
    <div className="flex flex-col border-b border-gray-900 border-opacity-5 py-8 dark:border-gray-50">
      {plain ? (
        <div className="flex flex-row items-center pb-3">
          {categories(post.node.categories.nodes)}
        </div>
      ) : null}
      <HappyLink
        href={`/${post.node.slug}`}
        classes="mr-auto flex w-auto flex-row text-xl text-gray-800 font-semibold hover:underline dark:text-gray-50"
      >
        <>{post.node.title}</>
      </HappyLink>
      <p className="leading-loose text-gray-900 text-opacity-60 dark:text-gray-50">
        {post.node.excerpt}
      </p>
      <div className="pt-3">
        {plain ? (
          <HappyLink
            classes="hover:underline dark:text-gray-50"
            href={post.node.author.node.uri}
          >
            {post.node.author.node.firstName}
          </HappyLink>
        ) : null}
        <p className="text-gray-500 dark:text-gray-400">{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
