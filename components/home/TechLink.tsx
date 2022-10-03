export default function TechLink({
  name,
  setIcon,
  currentIcon,
}: {
  name: string
  active: boolean
  setIcon: (icon: string) => void
  currentIcon: string
}): JSX.Element {
  const current = currentIcon === name.toLocaleLowerCase()
  return (
    <div className="flex cursor-pointer flex-col items-center py-3 text-gray-800 dark:text-gray-100 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <p
        className={`${current ? 'opacity-0' : 'opacity-60'} hover:opacity-0`}
        onClick={() => setIcon(name.toLocaleLowerCase())}
      >
        {name}
      </p>
      {current && (
        <div className="my-auto mt-2 h-2 w-2 rounded-full bg-blue-500 sm:mt-2 md:ml-2 lg:ml-2 xl:ml-2" />
      )}
    </div>
  )
}
