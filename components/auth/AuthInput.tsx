import SvgtoReact from '../Svgtoreact'

export default function AuthInput({
  value,
  setValue,
  name,
  icon,
  iconclass,
}: {
  value: string | undefined
  setValue: (value: string) => void
  name: string
  icon: string
  iconclass?: string
}): JSX.Element {
  return (
    <div className="relative mb-8 flex flex-col">
      <div className="absolute inset-y-0 left-0 flex items-center pl-5">
        <SvgtoReact name={icon} height={15} width={15} className={iconclass} />
      </div>
      <input
        type={name}
        name={name}
        value={value as string}
        className="w-full rounded-md border border-gray-900 border-opacity-10 bg-gray-50 bg-opacity-5 py-3 pr-5 pl-12 text-gray-900 dark:border-gray-50 dark:text-gray-50"
        placeholder={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
