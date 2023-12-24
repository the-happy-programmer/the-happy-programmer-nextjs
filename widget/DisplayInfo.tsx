import { ReactNode } from 'react'

export default function DisplayInfo({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}): JSX.Element {
  return (
    <div className=" bg-stone-100 pb-5 dark:bg-stone-800">
      <p className="container px-3 py-6 text-2xl text-stone-800 dark:text-stone-50">
        {title}
        {'.'}
        <span className="text-stone-500 dark:text-stone-400">{subtitle}</span>
      </p>
      <div className="container grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4">
        {children}
      </div>
    </div>
  )
}
