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
    <div className="flex flex-col overflow-hidden py-20 px-10">
      <div>
        <p className="pb-2 text-sm uppercase">{title}</p>
        <h3 className="text-3xl font-bold leading-relaxed">{subtitle}</h3>
      </div>
      <div className="flex flex-row gap-x-10 pt-5 sm:flex-row md:flex-col">
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
      <div className="mx-auto pt-20">
        <SvgtoReact name={'technologies/' + icon} />
      </div>
    </div>
  )
}
