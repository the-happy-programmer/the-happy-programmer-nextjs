'use client'
import { useState } from 'react'
import BurgerIcon from '@/public/svg/burger.svg'
import SideBar from './SideBar'
import { navLinks } from '@/app/data'
import scroll from '../lib/scroll'

const MobileSideBar = () => {
  const [sidebar, setsidebar] = useState<boolean>(false)
  return (
    <div className="flex text-gray-900 dark:text-gray-50 sm:hidden md:hidden lg:hidden xl:hidden">
      <button
        onClick={(e) => {
          scroll('hidden')
          setsidebar(!sidebar)
        }}
      >
        <BurgerIcon
          name="burger"
          className="stroke-current text-gray-900 dark:text-gray-50"
          height={15}
        />
      </button>
      {sidebar && <SideBar links={navLinks} setsidebar={setsidebar} />}{' '}
    </div>
  )
}

export default MobileSideBar
