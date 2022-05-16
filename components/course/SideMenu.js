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
          <li key={slug.name}>
            <Link href={slug.link}>{slug.name}</Link>
          </li>
        ))}
        {courses.length === 0 && <li>no results</li>}
      </ul>
    </div>
  )
}
