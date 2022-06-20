import SvgToReact from '../Svgtoreact'
import { useState } from 'react'

// test
export default function CourseSearch({ palceholder, allslugs, setCourses }) {
  const [sluglist, setSluglist] = useState(allslugs)

  const search = (e) => {
    if (e.target.value !== '') {
      setCourses(searchSlugs(e.target.value))
    } else {
      setCourses(allslugs)
    }
  }

  const searchSlugs = (value) =>
    allslugs.filter((slug) => slug.name.includes(value))

  return (
    <div>
      <div className="relative flex h-8">
        <div className="absolute inset-y-0 left-0 ml-3 flex items-center">
          <SvgToReact
            name="search"
            className="fill-current text-gray-900 dark:text-gray-50"
            height={12}
            width={12}
          />
        </div>
        <input
          maxLength="30"
          onChange={search}
          placeholder="search"
          className="outline-none dark:group-focusfocus:border-gray-50 rounded border border-gray-200 bg-gray-100 p-1 pl-8 text-sm text-gray-900 placeholder-gray-300 hover:border-gray-900 focus:border-gray-900 group-focus:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:hover:border-gray-100 dark:focus:border-gray-100"
        />
      </div>
    </div>
  )
}
