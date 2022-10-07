import SvgtoReact from './Svgtoreact'
import HappyButton from './Happybutton'
import HappyLink from './HappyLink'
import { useState } from 'react'
import SideBar from './SideBar'
import scroll from '../lib/scroll'
import Link from 'next/link'
import Spinner from './spinners/Spinner'
import { useUser } from '../lib/utils/useUser'

const Nav = () => {
  const { isLoading, user } = useUser()
  const [sidebar, setsidebar] = useState<boolean>(false)
  const links: string[][] = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxtjs.com/', 'NuxtJS'],
  ]

  const userNav = () => {
    if (isLoading) {
      return <Spinner />
    }
    if (user) {
      return (
        <Link href="/profile">
          <SvgtoReact
            name="user-icon"
            height={26}
            width={26}
            className="cursor-pointer stroke-current hover:text-gray-900 active:text-gray-50 dark:hover:text-gray-50"
          />
        </Link>
      )
    } else {
      return <HappyButton href="/signin">Sign In</HappyButton>
    }
  }

  return (
    <div className="h-17 sticky top-0 z-50 bg-gray-100 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-900">
      <nav className="h-17 text-gray-500 dark:text-gray-300">
        <div className="h-17 border-b dark:border-gray-700">
          <div className="h-17 container mx-auto flex flex-row-reverse items-center justify-between px-3 py-4 sm:flex-row sm:p-4 md:flex-row lg:flex-row xl:flex-row">
            <div>
              <HappyLink href="/" ariaLabel="The Happy Programmer">
                <SvgtoReact
                  name="logo"
                  className="justify-self-center fill-current stroke-current text-gray-900 dark:text-gray-50"
                  height={30}
                />
              </HappyLink>
            </div>
            <div className="hidden items-center text-sm sm:flex md:flex lg:flex xl:flex">
              {links.map(([link, name]) => (
                <div key={name} className="pr-5 sm:pr-6 md:pr-10 ">
                  <HappyLink
                    classes="px-0 pb-6 sm:pb-6 sm:px-5 md:px-5 lg:px-5 xl:px-5  hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-50"
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
              <div className="flex h-10 items-center justify-items-end">
                {userNav()}
              </div>
            </div>
            <button
              onClick={(e) => {
                scroll('hidden')
                setsidebar(!sidebar)
              }}
              className="flex text-gray-900 dark:text-gray-50 sm:hidden md:hidden lg:hidden xl:hidden"
            >
              <SvgtoReact
                name="burger"
                className="stroke-current text-gray-900 dark:text-gray-50"
                height={15}
              />
            </button>
            {sidebar && <SideBar links={links} setsidebar={setsidebar} />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
