export default function TechLink({
  name,
  active,
  icon,
}: {
  name: string
  active: boolean
  icon: string
}): JSX.Element {
  return (
    <div className="flex cursor-pointer flex-col items-center text-gray-800 dark:text-gray-100">
      <p>{name}</p>
      {active && <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />}
    </div>
  )
}
