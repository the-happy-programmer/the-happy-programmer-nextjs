import Logo from '@/public/svg/logo.svg'
import HappyLink from '../HappyLink'
import Link from 'next/link'
import { createClient } from '@/lib/utils/supabase/server'
import UserIcon from '@/public/svg/user-icon.svg'
import styles from '@/styles/buttons.module.css'
import { cookies } from 'next/headers'
import MobileSideBar from '../MobileSideBar'
import { navLinks } from '@/app/data'

async function Nav() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="h-17 sticky top-0 z-50 bg-stone-100 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:border-stone-700 dark:bg-default-900">
      <nav className="h-17 text-stone-500 dark:text-stone-300">
        <div className="h-17 border-b dark:border-stone-700">
          <div className="h-17 container mx-auto flex flex-row-reverse items-center justify-between px-3 py-4 sm:flex-row sm:p-4 md:flex-row lg:flex-row xl:flex-row">
            <div>
              <HappyLink href="/" ariaLabel="The Happy Programmer">
                <Logo
                  className="justify-self-center fill-default-900 stroke-default-900 dark:fill-stone-50 dark:stroke-stone-50"
                  height={30}
                />
              </HappyLink>
            </div>
            <div className="hidden items-center text-sm sm:flex md:flex lg:flex xl:flex">
              {navLinks.map(([link, name]) => (
                <div key={name} className="pr-5 sm:pr-6 md:pr-10 ">
                  <HappyLink
                    classes="px-0 pb-6 sm:pb-6 sm:px-5 md:px-5 lg:px-5 xl:px-5  hover:text-default-900 dark:hover:text-stone-50 active:text-stone-50"
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
              <div className="flex h-10 items-center justify-items-end">
                {user ? (
                  <Link href="/profile">
                    <UserIcon
                      width={26}
                      height={26}
                      className="cursor-pointer stroke-current hover:text-default-900 active:text-stone-50 dark:hover:text-stone-50"
                    />
                  </Link>
                ) : (
                  <Link href="/signin" className={styles.sbtn}>
                    Sign Up
                  </Link>
                )}
              </div>
            </div>
            <MobileSideBar />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
