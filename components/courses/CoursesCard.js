import Image from 'next/image'

export default function ({ courses }) {
  return courses.map((course) => (
    <div className="flex flex-col rounded-md bg-gray-50 py-10 px-8 dark:bg-gray-900">
      <h3 className="cursor-pointer text-lg font-bold hover:text-accent dark:text-gray-50 dark:hover:text-darkaccent">
        {course.title}
      </h3>
      <p className="pt-2 text-sm leading-normal line-clamp-4 dark:text-gray-300">
        {course.description}
      </p>
      <div className="mt-auto flex flex-row pt-10">
        <div className="relative h-10 w-10 rounded-full border-2 border-gray-50">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="/tony.jpg"
            alt="author picture"
            height={30}
            width={30}
          />
        </div>
        <div className="flex flex-col pl-4">
          <p className="text-sm font-semibold dark:text-gray-50">
            {course.author}
          </p>
          <p className="text-sm dark:text-gray-300">{course.experty}</p>
        </div>
      </div>
    </div>
  ))
}
