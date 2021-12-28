import HappyLink from './HappyLink'
import SvgtoReact from './Svgtoreact'

const categories = (cat) => {
  return cat.map((categories) => (
    <HappyLink href={`${categories.uri}`} key={categories.uri}>
      <a className='text-gray-600 hover:text-gray-900  text-sm dark:text-gray-400 cursor-pointer mr-2.5 dark:hover:text-gray-50 uppercase'>
        {categories.name}
      </a>
    </HappyLink>
  ))
}

const icontitle = (tag) =>
  tag.map((tag) => (
    <div className='w-12' key={tag.slug}>
      <SvgtoReact height={30} class='mr-4' name={tag.slug.toLowerCase()} />
    </div>
  ))

export default function Posthome({ post, plain }) {
  const dt = (date) => new Date(date).toDateString()

  return (
    <div className='flex flex-col py-8 border-b dark:border-gray-700 border-gray-200'>
      {plain ? (
        <div className='flex flex-row pb-3 items-center'>
          {categories(post.node.categories.nodes)}
        </div>
      ) : null}
      <HappyLink href={`/${post.node.slug}`} classes='mr-auto'>
        <a className='w-auto flex flex-row text-2xl hover:underline text-gray-900 dark:text-gray-50'>
          {icontitle(post.node.tags.nodes)}
          {post.node.title}
        </a>
      </HappyLink>
      <p className='text-gray-600 dark:text-gray-300 leading-loose'>
        {post.node.excerpt}
      </p>
      <div className='pt-5'>
        {plain ? (
          <p className='dark:text-gray-50'>{post.node.author.node.firstName}</p>
        ) : null}
        <p className='dark:text-gray-400 text-gray-600'>{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
