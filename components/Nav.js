import SvgtoReact from './Svgtoreact'
import HappyButton from './Happybutton'
import HappyLink from './HappyLink'
import { useState } from 'react'
import SideBar from './SideBar'
import scroll from '../lib/scroll'

const Nav = () => {
  const [sidebar, setsidebar] = useState(false)
  const sublinks = [
    // ['/course/flutter', 'Flutter'],
    // ['/course/reactnative', 'React Native'],
  ]
  const links = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxtjs.com/', 'NuxtJS'],
  ]
  // let's see this! or this, it's very sad
  return (
    <div className="sticky top-0 z-50 bg-gray-100 bg-opacity-90 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-900">
      <nav className="text-gray-500 dark:text-gray-300">
        <div className="border-b dark:border-gray-700">
          <div className="container mx-auto flex flex-row-reverse items-center justify-between px-3 py-4 sm:flex-row sm:p-4 md:flex-row lg:flex-row xl:flex-row">
            <div>
              <HappyLink href="/" ariaLabel="The Happy Programmer">
                <SvgtoReact
                  name="logo"
                  className="justify-self-center fill-current stroke-current text-gray-900 dark:text-gray-50"
                  height={30}
                />
              </HappyLink>
            </div>
            <div className="hidden items-center sm:flex md:flex lg:flex xl:flex">
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
              <HappyButton
                href="https://www.patreon.com/thehappyprogrammer"
                className="box-border"
              >
                support me
              </HappyButton>
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
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto ">
            <div className="flex items-center">
              {sublinks?.map(([link, name]) => (
                <div className="px-4 py-4" key={name}>
                  <HappyLink
                    classes="px-0 sm:px-4 md:px-4 lg:px-4 xl:px-4 pb-4 hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-200"
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
