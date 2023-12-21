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
    <div className="mx-auto bg-stone-100 py-20 dark:bg-stone-800">
      <p className="container py-6 text-center text-3xl font-bold text-stone-800 dark:text-stone-50">
        {title}{' '}
        <span className=" text-stone-500 dark:text-stone-400">{subtitle}</span>
      </p>
      <div className="container max-w-xl divide-y divide-stone-200 px-3 dark:divide-stone-700 ">
        {info.map(([title, subtitle]) => (
          <DropDown key={title} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  )
}
