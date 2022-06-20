import SvgtoReact from '../Svgtoreact'

export default function SearchCourse({ courses }) {
  return (
    <div className="inset-y-0 left-0 mx-auto ml-3 flex">
      <SvgtoReact
        name="search"
        className="fill-current text-gray-600 dark:text-gray-400"
        width={12}
      />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-20 bg-gray-100 pl-2 placeholder-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
      />
    </div>
  )
}
