export default function HappyButton({ children, href, xl }) {
  return (
    <a
      href={href}
      className={`hover:bg-opacity-80
      ${xl ? 'text-base' : 'text-xs'}
      ${xl ? 'py-3 px-10' : 'py-2 px-3'}
      ${xl ? 'border-2' : 'border'}
        focus:outline-none inline-block cursor-pointer rounded-md border-gray-900 bg-gray-900 text-gray-50 shadow-lg hover:border-opacity-10 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900  `}
    >
      {children}
    </a>
  )
}
