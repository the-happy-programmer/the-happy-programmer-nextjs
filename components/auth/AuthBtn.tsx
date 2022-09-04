import SvgtoReact from '../Svgtoreact'
import { MouseEventHandler } from 'react'
import { MouseEvent } from 'react'

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
      className="focus:outline-none flex cursor-pointer flex-row items-center rounded-md border-gray-900 bg-gray-900 text-base font-semibold capitalize tracking-wide text-gray-50 shadow-lg hover:border-opacity-10 hover:bg-opacity-80 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900"
    >
      <div className="border-r border-gray-700 dark:border-gray-200">
        <SvgtoReact
          name={icon}
          className="m-3 fill-current text-gray-50 dark:text-gray-900"
          height={26}
          width={26}
        />
      </div>
      <p className="px-3">sign in with {title}</p>
    </button>
  )
}
