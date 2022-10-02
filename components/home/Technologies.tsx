import type { TitleSubIcons } from '../../lib/types/home'

const TechLink = ({
  name,
  active,
}: {
  name: string
  active: boolean
}): JSX.Element => (
  <div className="flex cursor-pointer flex-col items-center text-gray-800 dark:text-gray-100">
    <p>{name}</p>
    {active && <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />}
  </div>
)

export default function Technologies({
  title,
  subtitle,
  icons,
}: TitleSubIcons): JSX.Element {
  return (
    <div className="flex flex-col py-20 px-10">
      <div>
        <p className="pb-2 uppercase">{title}</p>
        <h3 className="text-3xl font-bold leading-relaxed">{subtitle}</h3>
      </div>
      <div className="flex flex-row gap-x-10 pt-5">
        <TechLink name="Web" active={false} />
        <TechLink name="Mobile" active={false} />
        <TechLink name="SSG" active={true} />
      </div>
    </div>
  )
}
