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
    <div className="flex flex-row content-center gap-x-5">
      <SvgtoReact
        name={icon}
        className="h-15 w-15 fill-current text-stone-800 dark:text-stone-50"
        height={50}
        width={50}
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-accent dark:text-darkaccent">
          {title}
        </p>
        <div className="max-w-sm text-sm font-light text-default-900 text-opacity-80 dark:text-stone-50">
          {children}
        </div>
      </div>
    </div>
  )
}
