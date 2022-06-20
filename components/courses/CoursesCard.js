import Image from 'next/image'
import TagCourse from './TagCourse'

export default function ({ courses }) {
  return courses.map((course) => (
    <div className="flex flex-col rounded-md bg-gray-50 py-12 px-8 shadow-md dark:bg-gray-900">
      <TagCourse tags={course.tags} />
      <h3 className="cursor-pointer text-lg font-bold hover:text-accent dark:text-gray-50 dark:hover:text-darkaccent">
        {course.title}
      </h3>
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
  ))
}
