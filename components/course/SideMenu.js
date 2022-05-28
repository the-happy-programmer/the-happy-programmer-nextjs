import CourseSearch from './CourseSearch'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SideMenu({ courseslugs }) {
  const [courses, setCourses] = useState(courseslugs)
  const router = useRouter()

  const currentPath = (path) => router.asPath === path

  return (
    <div className="mr-10 pt-14">
      <CourseSearch
        placeholder={''}
        allslugs={courseslugs}
        setCourses={setCourses}
      />
      <ul className="pt-5">
        {courses.map((slug) => (
          <li
            key={slug.name}
            className={`
              ${
                currentPath(slug.link)
                  ? 'border-l-4 border-gray-900 text-gray-900 dark:border-gray-50 dark:text-gray-50'
                  : 'border-l-4 border-gray-100 text-gray-400 dark:border-gray-800 dark:text-gray-400'
              } py-1.5 pl-7`}
          >
            <Link href={slug.link}>{slug.name}</Link>
          </li>
        ))}
        {courses.length === 0 && <li>no results</li>}
      </ul>
    </div>
  )
}
