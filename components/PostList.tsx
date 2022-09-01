import Posthome from './Posthome'
import CatTag from './CatTag'
import { PostProps } from '../lib/types/blog'

export default function PostList({
  posts,
  categories,
  tags,
  banner,
}: {
  posts: PostProps[]
  categories: string[]
  tags: string[]
  banner?: string[][]
}): JSX.Element {
  return (
    <main className="border-t dark:border-gray-700">
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container grid grid-cols-5 gap-x-14 px-4">
          <div className="col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-4">
            {posts?.slice(0, 5).map((post) => (
              <Posthome post={post} key={post.link} plain={true} />
            ))}
            {(posts.length as number) >= 5 ? (
              <div className="py-20">
                <p className="border-b border-gray-200 py-3 text-2xl text-gray-900 dark:border-gray-700 dark:text-gray-50 ">
                  Older Posts
                </p>
                {posts?.slice(5).map((post) => (
                  <Posthome post={post} key={post.link} plain={false} />
                ))}
              </div>
            ) : null}
          </div>
          <div className="sticky top-16 h-screen">
            <CatTag tags={tags} title="Tags" />
            <CatTag categories={categories} title="Categories" />
            {banner && <CatTag title="War in Ukraine 🇺🇦" banner={banner} />}
          </div>
        </div>
      </div>
    </main>
  )
}
