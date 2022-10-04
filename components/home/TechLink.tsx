import SvgtoReact from '../Svgtoreact'

export default function TechLink({
  name,
  setIcon,
  currentIcon,
  icons,
}: {
  name: string
  active: boolean
  setIcon: (icon: string) => void
  currentIcon: string
  icons: string[]
}): JSX.Element {
  const current = currentIcon === name.toLocaleLowerCase()
  return (
    <div>
      <div className="flex cursor-pointer flex-col items-center py-3  sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div>
          <p
            className={`${
              current ? 'text-opacity-100' : 'text-opacity-60'
            } text-gray-800 hover:text-opacity-100 dark:text-gray-50`}
            onClick={() => setIcon(name.toLocaleLowerCase())}
          >
            {name}
          </p>
        </div>
        {current && (
          <div className="my-auto mt-2 h-2 w-2 rounded-full bg-accent dark:bg-darkaccent sm:mt-2 md:ml-2 lg:ml-2 xl:ml-2" />
        )}
      </div>
      <div className="hidden flex-row gap-x-3 sm:hidden md:flex lg:flex xl:flex">
        {icons.map((icon) => (
          <div className="rounded-md bg-gray-200 p-3 dark:bg-gray-700">
            <SvgtoReact
              name={icon}
              height={20}
              width={20}
              className="fill-current text-gray-900 dark:text-gray-50"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
