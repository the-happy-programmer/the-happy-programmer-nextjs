import SvgtoReact from '../components/Svgtoreact'
import HappyLink from '../components/HappyLink'

export default function DisplayCard({ svg, desc, link, socials }) {
  return (
    <div
      key={svg}
      className="flex flex-col rounded-xl border bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900"
    >
      <div className={`pt-5 pb-2 ${socials ? 'h-16' : 'h-20'}`}>
        <SvgtoReact
          className="fill-current dark:text-gray-50"
          name={svg.toLowerCase()}
          height={socials ? 30 : 45}
        />
      </div>
      <p className="text-2xl capitalize dark:text-gray-50">{svg}</p>
      <p className="py-2 leading-loose text-gray-600 dark:text-gray-300">
        {desc}
      </p>
      <HappyLink
        classes="dark:text-gray-50 font-bold justify-between mt-auto flex items-center"
        href={link}
      >
        {socials ? 'Follow' : 'Projects'}{' '}
        <SvgtoReact
          name="arrow"
          className="-rotate-90 transform fill-current dark:text-gray-50"
          height={15}
        />
      </HappyLink>
    </div>
  )
}
