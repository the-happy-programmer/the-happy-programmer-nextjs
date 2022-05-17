import CourseSearch from './CourseSearch'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SideMenu({ courseslugs }) {
  const [courses, setCourses] = useState(courseslugs)
  const router = useRouter()

  const currentPath = (path) => {
    console.log(router.asPath === path)

    return router.asPath === path
  }

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
                  ? 'text-gray-900 dark:text-gray-50'
                  : 'text-gray-400 dark:text-gray-400'
              } py-2`}
          >
            <Link href={slug.link}>{slug.name}</Link>
          </li>
        ))}
        {courses.length === 0 && <li>no results</li>}
      </ul>
    </div>
  )
}
