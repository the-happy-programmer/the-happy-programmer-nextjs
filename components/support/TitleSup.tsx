import { ReactNode } from 'react'

export default function TitleSup({
  children,
  title,
  subtitle,
  tag,
}: {
  children: ReactNode
  title: string
  subtitle: string
  tag?: string | undefined
}): JSX.Element {
  return (
    <div className="container pt-20">
      <div>
        <p className="text-xs font-semibold uppercase text-gray-900 text-opacity-50 dark:text-gray-50">
          {tag}
        </p>
        <h3 className="pt-2 pb-4 text-3xl font-bold dark:text-gray-50">
          {title}
        </h3>
        <p className="max-w-lg font-light text-gray-900 dark:text-gray-50">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-between py-10">
        {children}
      </div>
    </div>
  )
}
