import { useState } from 'react'
import type { TitleSubIcons } from '../../lib/types/home'
import SvgtoReact from '../Svgtoreact'
import TechLink from './TechLink'
export default function Technologies({
  title,
  subtitle,
  icons,
}: TitleSubIcons): JSX.Element {
  const [icon, setIcon] = useState<string>('web')
  return (
    <div>
      <div className="container flex flex-col px-10 pb-72 pt-40 md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center">
        <div className="max-w-xs">
          <p className="pb-2 text-sm uppercase text-gray-800 dark:text-gray-100">
            {title}
          </p>
          <h3 className="text-3xl font-bold leading-relaxed text-gray-800 dark:text-gray-100">
            {subtitle}
          </h3>
        </div>
        <div className="flex flex-row gap-x-10 pt-5 pl-0 sm:flex-row sm:pl-0 md:flex-col md:pl-20 lg:flex-col lg:pl-20 xl:flex-col xl:pl-20">
          <TechLink
            currentIcon={icon}
            name="Web"
            active={false}
            setIcon={setIcon}
          />
          <TechLink
            currentIcon={icon}
            name="Mobile"
            active={false}
            setIcon={setIcon}
          />
          <TechLink
            currentIcon={icon}
            name="SSG"
            active={true}
            setIcon={setIcon}
          />
        </div>
        <div className="relative right-4 flex items-center py-32">
          <div className="absolute left-0 top-0 mx-auto -mb-10 mt-20 sm:left-0 md:-top-24 md:left-32 lg:-top-24 lg:left-96 xl:-top-32 xl:left-32">
            <SvgtoReact name={'technologies/' + icon} height={500} />
          </div>
        </div>
      </div>
      <p className="container px-10 pb-10 pt-10 text-gray-900 text-opacity-60 dark:text-gray-50 sm:pt-10 lg:pt-0 xl:pt-0">
        The Happy Programmer
      </p>
    </div>
  )
}
