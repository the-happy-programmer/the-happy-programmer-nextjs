import { ReactNode } from 'react'

export default function Headerlayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="h-72 bg-gray-50  dark:bg-gray-900">
      <div className="">{children}</div>
    </div>
  )
}
