export default function HappyButton({ children, href, xl }) {
  return (
    <a
      href={href}
      className={`hover:bg-inherit hover:text-gray-900 
      ${xl ? 'text-base' : 'text-xs'}  
      ${xl ? 'py-3 px-10' : 'py-2 px-3'}
      ${xl ? 'border-2' : 'border'}
        inline-block border-gray-900 dark:border-gray-50 bg-gray-900 text-gray-50 rounded-md focus:outline-none dark:bg-gray-50 dark:text-gray-900 dark:hover:border-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 cursor-pointer`}
    >
      {children}
    </a>
  )
}
