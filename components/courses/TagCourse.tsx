import SvgtoReact from '../Svgtoreact'
import type { Tags } from '../../lib/types/courses'
export default function TagCourse({ tags }: { tags: Tags[] }) {
  return (
    <div className="flex flex-row space-x-4 pb-8">
      {tags.map((tag) => (
        <div key={tag}>
          <SvgtoReact
            name={'courses/' + tag.toLowerCase()}
            height={30}
            width={30}
            className="cursor-pointer fill-current text-gray-600  hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-50"
          />
        </div>
      ))}
    </div>
  )
}
