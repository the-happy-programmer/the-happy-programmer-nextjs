import HappyLink from "./HappyLink"

export default function Posthome({ post }) {
  const dt = (date) => new Date(date).toDateString()

  const categories = (cat) => {
    return cat.map((categories) => (
      <HappyLink href={`${categories.uri}`} key={categories.uri}>
        <a className='dark:text-gray-400 mr-2.5 dark:hover:text-gray-200 uppercase'>
          {categories.name}
        </a>
      </HappyLink>
    ))
  }
  return (
    <div className='flex flex-col py-8 border-b border-gray-600'>
      <div className='flex flex-row pb-2'>
        {categories(post.node.categories.nodes)}
      </div>
      <HappyLink href={`/${post.node.slug}`}>
        <a className=' text-2xl text-gray-900 dark:text-gray-50'>
          {post.node.title}
        </a>
      </HappyLink>
      <p className='text-gray-900 dark:text-gray-300 leading-loose'>
        {post.node.excerpt}
      </p>
      <div className='pb-2 pt-5'>
        <p className='dark:text-gray-50'>{post.node.author.node.firstName}</p>
        <p className='dark:text-gray-400'>{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
