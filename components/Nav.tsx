'use client'
import SvgtoReact from './Svgtoreact'
import HappyLink from './HappyLink'
import { useEffect, useState } from 'react'
import SideBar from './SideBar'
import scroll from '../lib/scroll'
import Link from 'next/link'
import { createClient } from '@/lib/utils/supabase/client'
import { User } from '@supabase/supabase-js'
import UserIcon from '@/public/svg/user-icon.svg'
import styles from '@/styles/buttons.module.css'
const Nav = () => {
  const supabase = createClient()
  const [sidebar, setsidebar] = useState<boolean>(false)
  const [user, setUser] = useState<{ user: User | null }>({ user: null })

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser()
        setUser(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [supabase])
  const links: string[][] = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxtjs.com/', 'NuxtJS'],
  ]

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
                {user.user ? (
                  <Link href="/profile">
                    <UserIcon
                      width={26}
                      height={26}
                      className="cursor-pointer stroke-current hover:text-gray-900 active:text-gray-50 dark:hover:text-gray-50"
                    />
                  </Link>
                ) : (
                  <Link href="/signin" className={styles.sbtn}>
                    Sign Up
                  </Link>
                )}
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
