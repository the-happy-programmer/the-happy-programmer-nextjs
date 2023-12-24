import { courses } from '@/app/courses/data'
import { CourseProps } from '../../lib/types/courses'
import SvgtoReact from '../Svgtoreact'

export default function SearchCourse({}: {}) {
  return (
     <div className="inset-y-0 left-0 mx-auto ml-3 flex">
      <SvgtoReact
        name="search"
        className="stroke-current text-stone-600 dark:text-stone-400"
        width={12}
      />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-20 bg-stone-100 pl-2 placeholder-opacity-60 dark:bg-stone-800 dark:text-stone-50 dark:placeholder-stone-400"
      />
    </div>
  )
}
