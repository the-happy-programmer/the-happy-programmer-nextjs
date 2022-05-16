import CourseSearch from './CourseSearch'
import Link from 'next/link'
import { useState } from 'react'
export default function SideMenu({ courseslugs }) {
  const [courses, setCourses] = useState(courseslugs)
  return (
    <div>
      <CourseSearch
        placeholder={''}
        allslugs={courseslugs}
        setCourses={setCourses}
      />
      <ul>
        {courses.map((slug) => (
          <li>
            <Link href={slug.link}>{slug.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
