import Image from 'next/image'
import Link from 'next/link'
import TagCourse from './TagCourse'
import type { CourseProps } from '../../lib/types/courses'

export default function CoursesCard({
  courses,
}: {
  courses: CourseProps[]
}): JSX.Element {
  return (
    <>
      {courses.map((course: CourseProps) => (
        <div
          key={course.id}
          className="flex cursor-pointer flex-col rounded-md border border-gray-900 border-opacity-5 bg-gray-50 py-12 px-8 hover:border-gray-50 hover:shadow-lg dark:border-gray-50 dark:border-opacity-20 dark:bg-gray-900 dark:hover:border-gray-900 "
        >
          <TagCourse tags={course.tags} />
          <Link
            href={course.link}
            className="cursor-pointer text-lg font-bold hover:text-accent dark:text-gray-50 dark:hover:text-darkaccent"
          >
            {course.title}
          </Link>
          <p className="pt-2 text-sm leading-normal text-gray-600 line-clamp-4 dark:text-gray-300">
            {course.description}
          </p>
          <div className="mt-auto flex flex-row pt-10">
            <div className="relative h-10 w-10 rounded-full border-2 border-gray-200 dark:border-gray-50">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src="/tony.jpg"
                alt="author picture"
              />
            </div>
            <div className="flex flex-col pl-2">
              <p className="text-sm font-semibold dark:text-gray-50">
                {course.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {course.experty}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
