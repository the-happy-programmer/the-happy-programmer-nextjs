import SvgtoReact from './Svgtoreact'
import HappyButton from './Happybutton'
import HappyLink from './HappyLink'
import { useState } from 'react'
import SideBar from './SideBar'
import scroll from '../lib/scroll'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const { data: session } = useSession()
  const [sidebar, setsidebar] = useState(false)

  const links = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxtjs.com/', 'NuxtJS'],
  ]

  return (
    <div className="sticky top-0 z-50 bg-gray-100 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-900">
      <nav className="text-gray-500 dark:text-gray-300">
        <div className="border-b dark:border-gray-700">
          <div className="container mx-auto flex flex-row-reverse items-center justify-between px-3 py-4 sm:flex-row sm:p-4 md:flex-row lg:flex-row xl:flex-row">
            <div>
              <HappyLink href="/" ariaLabel="The Happy Programmer">
                <SvgtoReact
                  name="logo"
                  className="stroke-gray-900 fill-gray-900 dark:stroke-gray-50 dark:fill-gray-50 justify-self-center "
                  height={30}
                />
              </HappyLink>
            </div>
            <div className="hidden items-center text-sm sm:flex md:flex lg:flex xl:flex">
              {links.map(([link, name]) => (
                <div key={name} className="pr-5 sm:pr-6 md:pr-10">
                  <HappyLink
                    classes="px-0 pb-5 sm:pb-6 sm:px-5 md:px-5 lg:px-5 xl:px-5  hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-50"
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
              {session ? (
                <Link href="/profile">
                  <Image
                    src={session.user.image}
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </Link>
              ) : (
                <HappyButton
                  href="https://www.patreon.com/thehappyprogrammer"
                  className="box-border"
                >
                  support me
                </HappyButton>
              )}
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
