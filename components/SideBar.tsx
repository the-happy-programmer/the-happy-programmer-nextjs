import Link from 'next/link'
import scroll from '../lib/scroll'
import HappyButton from './Happybutton'
import SvgtoReact from './Svgtoreact'

export default function SideBar({
  links,
  setsidebar,
}: {
  links: string[][]
  setsidebar: (sidebar: boolean) => void
}) {
  const closeSidebar = () => {
    setsidebar(false)
    scroll('auto')
    return
  }

  return (
    <div className="absolute bottom-0 top-0 left-0 h-screen w-screen bg-gray-300 bg-opacity-95 dark:bg-gray-800">
      <div className="flex h-screen w-72 flex-col border-r border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center border-b px-3 py-4 dark:border-gray-700">
          <div
            className="cursor-pointer self-end"
            onClick={(e) => closeSidebar()}
          >
            <SvgtoReact
              name="cancel"
              className=" fill-current text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 "
              height={15}
            />
          </div>
        </div>
        <div className="px-5 py-6">
          {links.map(([link, name]) => (
            <div className="py-3" key={name}>
              <Link href={link} onClick={(e) => closeSidebar()}>
                {name}
              </Link>
            </div>
          ))}
        </div>
        <div className="px-4">
          <HappyButton href="https://www.patreon.com/thehappyprogrammer">
            support me
          </HappyButton>
        </div>
        <div
          className="mt-auto w-full cursor-pointer border-t p-4 dark:border-gray-700 dark:bg-gray-800"
          onClick={(e) => closeSidebar()}
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
    </div>
  )
}
