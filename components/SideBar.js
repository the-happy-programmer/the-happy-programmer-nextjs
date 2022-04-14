import Link from 'next/link'

export default function SideBar({ links, setsidebar }) {
  return (
    <div className="absolute bottom-0 top-0 left-0 h-screen w-screen bg-gray-300 bg-opacity-95 dark:bg-gray-800">
      <div className="h-screen w-72 border-r border-gray-700 bg-gray-100 dark:bg-gray-800">
        {links.map(([link, name]) => (
          <div>
            <Link href={link}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
