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
    <button onClick={onClick} className="px-1">
      <div className="rounded-full bg-gray-50 p-0.5">
        <SvgtoReact
          name={icon}
          className="m-3 fill-current text-gray-900 dark:text-gray-900"
          height={15}
          width={15}
        />
      </div>
    </button>
  )
}
