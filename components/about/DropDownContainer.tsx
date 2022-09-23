import DropDown from './DropDown'
export default function DropDownContainer({
  title,
  subtitle,
  info,
}: {
  title: string
  subtitle?: string
  info: string[][]
}): JSX.Element {
  return (
    <div className="mx-auto bg-gray-100 py-20 dark:bg-gray-800">
      <p className="container py-6 text-center text-3xl font-bold text-gray-800 dark:text-gray-50">
        {title}{' '}
        <span className=" text-gray-500 dark:text-gray-400">{subtitle}</span>
      </p>
      <div className="container max-w-xl divide-y divide-gray-200 px-3 dark:divide-gray-700 ">
        {info.map(([title, subtitle]) => (
          <DropDown key={title} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  )
}
