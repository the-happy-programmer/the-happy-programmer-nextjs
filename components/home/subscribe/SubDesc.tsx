import { ReactNode } from 'react'
import SvgtoReact from '../../Svgtoreact'
export default function SubDesc({
  title,
  children,
  icon,
}: {
  title: string
  children: ReactNode
  icon: string
}): JSX.Element {
  return (
    <div className="flex flex-row gap-x-5">
      <SvgtoReact name={icon} height={40} width={40} />
      <div className="flex flex-col">
        <p className="font-semibold text-accent dark:text-darkaccent">
          {title}
        </p>
        <div className="max-w-sm text-gray-900 text-opacity-60 dark:text-gray-50">
          {children}
        </div>
      </div>
    </div>
  )
}
