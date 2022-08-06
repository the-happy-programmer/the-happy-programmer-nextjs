interface BtnProps {
  children: string
  href: string
  xl?: boolean
  onClick?: React.MouseEvent<HTMLDivElement, MouseEvent>
}

export default function HappyButton({
  children,
  href,
  xl,
  onClick,
}: BtnProps): JSX.Element {
  return (
    <a
      onClick={(e) => onClick}
      href={href}
      className={`capitalize tracking-wide hover:bg-opacity-80
      ${xl ? 'text-base' : 'text-xs'}  
      ${xl ? 'py-2 px-6' : 'py-2 px-4'}
      ${xl ? 'border-2' : 'border'}
        focus:outline-none inline-block cursor-pointer rounded-md border-gray-900 bg-gray-900  font-medium leading-6 text-gray-50 shadow-lg hover:border-opacity-10 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900`}
    >
      {children}
    </a>
  )
}
