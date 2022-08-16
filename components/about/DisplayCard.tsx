import SvgtoReact from '../Svgtoreact'
import HappyLink from '../HappyLink'
import type { DisplayCardProps } from '../../lib/types/about'
export default function DisplayCard({
  svg,
  desc,
  link,
  socials,
}: DisplayCardProps): JSX.Element {
  return (
    <div
      key={svg}
      className="flex transform cursor-pointer flex-col rounded-md border border-gray-900 border-opacity-5 bg-gray-50 p-5 transition duration-150 ease-in hover:border-gray-50 hover:shadow-lg dark:border-gray-50 dark:border-opacity-20 dark:bg-gray-900 dark:hover:border-gray-900"
    >
      <div className="h-16 pt-5 pb-2">
        <SvgtoReact name={svg.toLowerCase()} height={socials ? 25 : 30} />
      </div>
      <p className="text-lg font-bold capitalize dark:text-gray-50">{svg}</p>
      <p className="py-2 text-sm leading-loose text-gray-600 dark:text-gray-300">
        {desc}
      </p>
      <HappyLink
        classes="group dark:hover:text-darkaccent hover:text-accent dark:text-gray-50 font-semibold justify-between mt-auto flex items-center transition duration-150 ease-in"
        href={link}
      >
        {socials ? 'Follow' : 'Projects'}{' '}
        <SvgtoReact
          name="arrow"
          className="-rotate-90 transform fill-current group-hover:text-accent dark:text-gray-50 dark:group-hover:text-darkaccent "
          height={15}
        />
      </HappyLink>
    </div>
  )
}
