import HappyLink from "./HappyLink"
import SvgtoReact from "./Svgtoreact"

export default function Posthome({ post }) {
  const dt = (date) => new Date(date).toDateString()

  const categories = (cat) => {
    return cat.map((categories) => (
      <HappyLink href={`${categories.uri}`} key={categories.uri}>
        <a className='text-gray-600 hover:text-gray-900 dark:text-gray-400 mr-2.5 cursor-pointer dark:hover:text-gray-50 uppercase'>
          {categories.name}
        </a>
      </HappyLink>
    ))
  }
  const icontitle = (tag) =>
    tag.map((tag) => (
      <SvgtoReact key={tag.slug} height='30' class='mr-4' name={tag.slug} />
    ))
  return (
    <div className='flex flex-col py-8 border-b dark:border-gray-600 border-gray-200'>
      <div className='flex flex-row pb-2'>
        {categories(post.node.categories.nodes)}
      </div>
      <HappyLink href={`${post.node.slug}`} classes='mr-auto'>
        <a className='w-auto flex flex-row text-2xl hover:underline text-gray-900 dark:text-gray-50'>
          {icontitle(post.node.tags.nodes)}
          {post.node.title}
        </a>
      </HappyLink>
      <p className='text-gray-600 dark:text-gray-300 leading-loose'>
        {post.node.excerpt}
      </p>
      <div className='pb-2 pt-5'>
        <p className='dark:text-gray-50'>{post.node.author.node.firstName}</p>
        <p className='dark:text-gray-400 text-gray-600'>{dt(post.node.date)}</p>
      </div>
    </div>
  )
}
