export default function HappyButton({ children, href }) {
  return (
    <a
      href={href}
      className='hover:bg-gray-50 hover:text-gray-900 text-xs inline-block py-2 px-3 border border-gray-900 dark:border-gray-50 bg-gray-900 text-gray-50 rounded-md focus:outline-none dark:bg-gray-50 dark:text-gray-900 dark:hover:border-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 cursor-pointer'
    >
      {children}
    </a>
  )
}
