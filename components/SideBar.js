import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function SideBar({ links, setsidebar }) {
  return (
    <div className="absolute bottom-0 top-0 left-0 h-screen w-screen bg-gray-300 bg-opacity-95 dark:bg-gray-800">
      <div className="h-screen w-72 border-r border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center border-b px-3 py-5 dark:border-gray-700">
          <div
            className="cursor-pointer self-end"
            onClick={(e) => setsidebar(false)}
          >
            <SvgtoReact
              name="cancel"
              className=" fill-current text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 "
              height={15}
            />
          </div>
          <div
            className="cursor-pointer self-start"
            onClick={(e) => setsidebar(false)}
          >
            <Link href="/">
              <SvgtoReact
                name="fulllogo"
                className="fill-current stroke-current text-gray-900 dark:text-gray-50"
                height={20}
                width={75}
              />
            </Link>
          </div>
        </div>
        <div className="px-4">
          {links.map(([link, name]) => (
            <div className="py-2" key={name}>
              <Link href={link}>
                <a onClick={(e) => setsidebar(false)}>{name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
