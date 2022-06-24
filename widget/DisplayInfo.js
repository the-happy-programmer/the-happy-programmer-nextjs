export default function DisplayInfo({ title, subtitle, children }) {
  return (
    <div className=" bg-gray-100 pb-5 dark:bg-gray-800">
      <p className="container px-3 py-6 text-2xl text-gray-800 dark:text-gray-50">
        {title}
        {'.'}
        <span className="text-gray-500 dark:text-gray-400">{subtitle}</span>
      </p>
      <div className="container grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4">
        {children}
      </div>
    </div>
  )
}
