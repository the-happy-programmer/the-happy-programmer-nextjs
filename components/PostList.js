import Posthome from './Posthome'
import CatTag from './CatTag'

export default function PostList({ posts, categories }) {
  return (
    <main className="border-t dark:border-gray-700">
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container grid grid-cols-5 gap-x-14 px-4">
          <div className="col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-4">
            {posts?.slice(0, 5).map((node) => (
              <Posthome post={node} key={node.node.postId} plain={true} />
            ))}
            {posts.length >= 5 ? (
              <div className="py-20">
                <p className="border-b border-gray-200 py-3 text-2xl text-gray-900 dark:border-gray-700 dark:text-gray-50 ">
                  Older Posts
                </p>
                {posts?.slice(5).map((node) => (
                  <Posthome post={node} key={node.node.postId} plain={false} />
                ))}
              </div>
            ) : null}
          </div>
          <div className="sticky top-16 h-screen">
            <CatTag categories={categories} title="Categories" />
          </div>
        </div>
      </div>
    </main>
  )
}
