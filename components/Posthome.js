import HappyLink from './HappyLink'
import SvgtoReact from './Svgtoreact'

const categories = (cat) => {
  return cat.map((categories) => (
    <HappyLink href={`${categories.uri}`} key={categories.uri}>
      <p className="mr-2.5 cursor-pointer text-sm  uppercase text-gray-600  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
        {categories.name}
      </p>
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
      <HappyLink href={`/${post.node.slug}`} classes="mr-auto">
        <a className="flex w-auto flex-row text-2xl text-gray-900 hover:underline dark:text-gray-50">
          {icontitle(post.node.tags.nodes)}
          {post.node.title}
        </a>
      </HappyLink>
      <p className="leading-loose text-gray-600 dark:text-gray-300">
        {post.node.excerpt}
      </p>
      <div className="pt-5">
        {plain ? (
          <p className="dark:text-gray-50">{post.node.author.node.firstName}</p>
        ) : null}
        <p className="text-gray-600 dark:text-gray-400">{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
