import SvgtoReact from './Svgtoreact'
import HappyButton from './Happybutton'
import HappyLink from './HappyLink'
import { useState } from 'react'
import SideBar from './SideBar'
import scroll from '../lib/scroll'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Spinner from './spinners/Spinner'
const Nav = () => {
  const { data: session, status } = useSession()
  const [sidebar, setsidebar] = useState(false)

  const links = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxtjs.com/', 'NuxtJS'],
  ]

  const userNav = () => {
    if (status === 'loading') {
      return <Spinner />
    }

    if (session) {
      return (
        <Link href="/profile">
          <Image
            src={session.user.image}
            height={30}
            width={30}
            className="cursor-pointer rounded-full"
          />
        </Link>
      )
    } else {
      return (
        <HappyButton
          className="box-border"
          onClick={(e) => signIn({ callbackUrl: '/' })}
        >
          Sign In
        </HappyButton>
      )
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-gray-100 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-900 h-17">
      <nav className="text-gray-500 dark:text-gray-300 h-17">
        <div className="border-b dark:border-gray-700 h-17">
          <div className="container mx-auto flex flex-row-reverse items-center justify-between px-3 py-4 sm:flex-row sm:p-4 md:flex-row lg:flex-row xl:flex-row h-17">
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
                <div key={name} className="pr-5 sm:pr-6 md:pr-10">
                  <HappyLink
                    classes="px-0 pb-6 sm:pb-6 sm:px-5 md:px-5 lg:px-5 xl:px-5  hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-50"
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
              {userNav()}
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
