import Posthome from "./Posthome"
import Link from "next/link"

export default function PostList({ edges, category }) {
  return (
    <main className='border-t dark:border-gray-600'>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <div className='container grid grid-cols-5 px-4 gap-x-14'>
          <div className='col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-4'>
            {edges.slice(0, 5).map((node) => (
              <Posthome post={node} key={node.node.postId} plain={true} />
            ))}
            <div className='py-20'>
              <p className='text-2xl border-b border-gray-200 dark:border-gray-600 py-3 text-gray-900 dark:text-gray-50'>
                Older Posts
              </p>
              {edges.slice(5).map((node) => (
                <Posthome post={node} key={node.node.postId} plain={false} />
              ))}
            </div>
          </div>
          <div className='hidden pt-6 md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col'>
            <p className='dark:text-gray-50 text-gray-900 text-xl py-2'>
              Category
            </p>
            <div className='divide-y dark:divide-gray-700'>
              {category.nodes.map((cat) => (
                <div className='py-2' key={cat.slug}>
                  <Link href={`/category/${cat.slug}`}>
                    <a className='dark:text-gray-300 dark:hover:text-gray-50 text-gray-600 hover:text-gray-900 cursor-pointer'>
                      {cat.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
