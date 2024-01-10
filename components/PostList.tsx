import Posthome from './Posthome'
import CatTag from './CatTag'
import type { PostProps } from '../lib/types/blog'
import { Divider } from '@nextui-org/divider'

export default function PostList({
  current,
  posts,
  categories,
  tags,
}: {
  current?: string
  posts: PostProps[]
  categories: string[]
  tags: string[]
}): JSX.Element {
  return (
    <main className="border-t border-divider bg-content1">
      <div className="container grid grid-cols-5 gap-x-14 px-4">
        <div className="col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-4">
          {posts?.slice(0, 5).map((post) => (
            <Posthome post={post} key={post.link} plain={true} />
          ))}
          {(posts.length as number) >= 5 ? (
            <div className="py-20">
              <h3 className="py-3 text-2xl">Older Posts</h3>
              <Divider />
              {posts?.slice(5).map((post) => (
                <Posthome post={post} key={post.link} plain={false} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="sticky top-16 h-screen">
          <CatTag tags={tags} title="Tags" current={current} />
          <CatTag
            categories={categories}
            current={current}
            title="Categories"
          />
        </div>
      </div>
    </main>
  )
}
