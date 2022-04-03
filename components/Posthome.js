import HappyLink from './HappyLink'
import SvgtoReact from './Svgtoreact'

const categories = (cat) => {
  return cat.map((categories) => (
    <HappyLink
      href={`${categories.uri}`}
      key={categories.uri}
      classes="mr-2.5 cursor-pointer text-sm bg-gray-200 dark:bg-gray-700 dark:border-gray-700 px-2 rounded-full border text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50"
    >
      {categories.name}
    </HappyLink>
  ))
}

const icontitle = (tag) =>
  tag.map((tag) => (
    <div className="w-12" key={tag.slug}>
      <SvgtoReact height={30} class="mr-4" name={tag.slug.toLowerCase()} />
    </div>
  ))

export default function Posthome({ post, plain }) {
  const dt = (date) => new Date(date).toDateString()

  return (
    <div className="flex flex-col border-b border-gray-200 py-8 dark:border-gray-700">
      {plain ? (
        <div className="flex flex-row items-center pb-3">
          {categories(post.node.categories.nodes)}
        </div>
      ) : null}
      <HappyLink
        href={`/${post.node.slug}`}
        classes="mr-auto flex w-auto py-2.5 flex-row text-xl text-gray-800 font-semibold hover:underline dark:text-gray-100"
      >
        <>
          {icontitle(post.node.tags.nodes)}
          {post.node.title}
        </>
      </HappyLink>
      <p className="leading-loose text-gray-600 dark:text-gray-300">
        {post.node.excerpt}
      </p>
      <div className="pt-3">
        {plain ? (
          <p className="dark:text-gray-50">{post.node.author.node.firstName}</p>
        ) : null}
        <p className="text-gray-500 dark:text-gray-400">{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
