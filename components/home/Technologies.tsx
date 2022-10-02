import { useState } from 'react'
import type { TitleSubIcons } from '../../lib/types/home'
import TechLink from './TechLink'
export default function Technologies({
  title,
  subtitle,
  icons,
}: TitleSubIcons): JSX.Element {
  const [icon, setIcon] = useState<string>('techweb')
  return (
    <div className="flex flex-col py-20 px-10">
      <div>
        <p className="pb-2 uppercase">{title}</p>
        <h3 className="text-3xl font-bold leading-relaxed">{subtitle}</h3>
      </div>
      <div className="flex flex-row gap-x-10 pt-5">
        <TechLink name="Web" active={false} icon="webtech" />
        <TechLink name="Mobile" active={false} icon="mobiletech" />
        <TechLink name="SSG" active={true} icon="ssgtech" />
      </div>
    </div>
  )
}
