import SvgtoReact from '../Svgtoreact'
import { MouseEventHandler } from 'react'

interface BtnProps {
  icon: string
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function AuthBtn({
  icon,
  title,
  onClick,
}: BtnProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none flex cursor-pointer flex-row items-center rounded-md border-gray-900 bg-gray-900 text-xs capitalize tracking-wide text-gray-50 shadow-lg hover:border-opacity-10 hover:bg-opacity-80 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900"
    >
      <div className="flex h-12 w-12 items-center justify-center border-r border-gray-700 dark:border-gray-200">
        <SvgtoReact
          name={icon}
          className="m-3 fill-current text-gray-50 dark:text-gray-900"
          height={18}
          width={18}
        />
      </div>
      <p className="p-4">
        sign in with <strong>{title}</strong>
      </p>
    </button>
  )
}
