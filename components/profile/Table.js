export default function Table({ title, children }) {
  return (
    <div className="rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="rounded-t-md  bg-gray-700 py-2 px-4">
        <span className=" text-gray-50">{title}</span>
      </div>
      <div className="py-2 px-4">{children}</div>
    </div>
  )
}
