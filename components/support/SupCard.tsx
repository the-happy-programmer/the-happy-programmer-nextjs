import SvgtoReact from '../Svgtoreact'

export default function SupCard({
  icon,
  title,
}: {
  icon: string
  title: string
}): JSX.Element {
  return (
    <div className="w-56 rounded-2xl border border-gray-900 border-opacity-20 p-5 dark:border-gray-50">
      <div className="table overflow-auto rounded-full bg-blue-100 p-4 dark:bg-blue-800">
        <div className="flex h-10 w-10 flex-col content-center items-center justify-center">
          <SvgtoReact name={icon} height={25} className="" />
        </div>
      </div>
      <div className="w-20">
        <h4 className="pt-24 text-xl font-semibold capitalize dark:text-stone-50">
          {title}
        </h4>
      </div>
    </div>
  )
}
