export default function HappyButton({ children, href, xl, onClick }) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`font-semibold capitalize leading-loose tracking-wide hover:bg-gray-900/80
      dark:hover:bg-gray-50/80
      ${xl ? 'text-base' : 'text-xs'}
      ${xl ? 'py-1 px-6' : 'py-1 px-3'}
      ${xl ? 'border-2' : 'border'}
        focus:outline-none inline-block cursor-pointer rounded-md border-gray-900 bg-gray-900  text-gray-50 shadow-lg hover:border-gray-900/10 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:border-gray-50/10`}
    >
      {children}
    </a>
  )
}
