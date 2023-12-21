import type { ProfileProps } from '../../lib/types/profile'

export default function Table({ title, children }: ProfileProps): JSX.Element {
  return (
    <div className="rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800">
      <div className="rounded-t-md  bg-stone-700 py-2 px-4">
        <span className=" text-stone-50">{title}</span>
      </div>
      <div className="py-2 px-4">{children}</div>
    </div>
  )
}
