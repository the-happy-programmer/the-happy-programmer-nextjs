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
  console.log('CURREMT:', currentIcon, name)
  return (
    <div className="flex cursor-pointer flex-col items-center text-gray-800 dark:text-gray-100">
      <p onClick={() => setIcon(name.toLocaleLowerCase())}>{name}</p>
      {currentIcon === name.toLocaleLowerCase() && (
        <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
      )}
    </div>
  )
}
