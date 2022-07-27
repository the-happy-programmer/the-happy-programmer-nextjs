import SvgtoReact from '../Svgtoreact'

export default function TagCourse({ tags }) {
  return (
    <div className="flex flex-row space-x-4 pb-8">
      {tags.map((tag) => (
        <div key={tag}>
          <SvgtoReact
            name={'courses/' + tag.toLowerCase()}
            height={30}
            width={30}
            className="fill-gray-300 hover:fill-gray-900  dark:fill-gray-600 dark:hover:fill-gray-50 cursor-pointer"
          />
        </div>
      ))}
    </div>
  )
}
