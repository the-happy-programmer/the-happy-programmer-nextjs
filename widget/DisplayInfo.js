export default function DisplayInfo({ title, subtitle, children }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 pb-5'>
      <p className='container text-gray-800 dark:text-gray-50 px-3 py-6 text-2xl'>
        {title}
        {"."}
        <span className='dark:text-gray-400 text-gray-500'>{subtitle}</span>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-2 gap-5  container'>
        {children}
      </div>
    </div>
  )
}
