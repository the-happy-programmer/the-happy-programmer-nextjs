import { getAllDocs } from '@/lib/courseslib/courseapi'
import { PostProps } from '../../lib/types/blog'
import SearchTrigger from '../Navigation/SearchTrigger'

const posts: PostProps[] = getAllDocs('course/blog').map((post: PostProps) => ({
  link: post.link,
  meta: post.meta,
}))

export default function MyHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="container px-4 pt-10 sm:pt-12 md:pt-16  lg:pt-20 xl:pt-20">
      <h2 className="text-xs uppercase text-default-600">{subtitle}</h2>
      <h1 className="text-4xl font-semibold tracking-tight lg:text-4xl">
        {title}
      </h1>
      <div className="relative float-left mt-9">
        <SearchTrigger posts={posts} />
      </div>
    </div>
  )
}
