import Image from 'next/image'
import Link from 'next/link'
import TagCourse from './TagCourse'
import type { CourseProps } from '../../lib/types/courses'
import { courses } from '@/app/(application)/courses/data'

export default function CoursesCard(): JSX.Element {
  return (
    <>
      {courses.map((course: CourseProps) => (
        <div
          key={course.id}
          className="flex cursor-pointer flex-col rounded-md border border-default-900 border-opacity-5 bg-stone-50 py-12 px-8 hover:border-stone-50 hover:shadow-lg dark:border-stone-50 dark:border-opacity-20 dark:bg-default-900 dark:hover:border-default-900 "
        >
          <TagCourse tags={course.tags} />
          <Link
            href={course.link}
            className="cursor-pointer text-lg font-bold hover:text-accent dark:text-stone-50 dark:hover:text-darkaccent"
          >
            {course.title}
          </Link>
          <p className="pt-2 text-sm leading-normal text-stone-600 line-clamp-4 dark:text-stone-300">
            {course.description}
          </p>
          <div className="mt-auto flex flex-row pt-10">
            <div className="relative h-10 w-10 rounded-full border-2 border-stone-200 dark:border-stone-50">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src="/tony.jpg"
                alt="author picture"
              />
            </div>
            <div className="flex flex-col pl-2">
              <p className="text-sm font-semibold dark:text-stone-50">
                {course.author}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-300">
                {course.experty}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
