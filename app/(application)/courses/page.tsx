import CoursesCard from '@/components/courses/CoursesCard'
import SearchCourses from '@/components/courses/SearchCourses'
import { header } from './data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses | The Happy Programmer',
  description: 'programming courses made by the happy programmer',
}

export default function Courses(): JSX.Element {
  return (
    <div className="place-self-center self-center bg-background py-12">
      <div className="container pt-12">
        <div className="mx-auto flex flex-col items-center py-5">
          <h1 className="text-3xl font-semibold text-foreground">
            {header.title}
          </h1>
          <h2 className="max-w-xs pb-5 pt-2 text-center text-foreground">
            {header.subtitle}
          </h2>
          <div className="bg-default-100 px-7 py-1">
            <SearchCourses />
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-5 px-2 pt-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <CoursesCard />
        </div>
      </div>
    </div>
  )
}
