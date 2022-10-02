import SvgtoReact from '../Svgtoreact'

import { SubHeroProps } from '../../lib/types/home'

export default function SubHero({ subhero }: SubHeroProps): JSX.Element {
  return (
    <div className="border-t border-b border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-x-10  px-3 sm:flex-col md:flex-row xl:flex-row">
        {subhero.map((sub) => (
          <div
            className="flex max-w-md flex-row items-center gap-x-4 py-28"
            key={sub.icon}
          >
            <div className="rounded-md bg-gradient-to-r from-blue-400  to-blue-700 p-4">
              <SvgtoReact
                className="fill-current stroke-current text-gray-100  dark:text-gray-800"
                height={20}
                name={sub.icon}
              />
            </div>
            <div className="">
              <p className="text-md font-semibold dark:text-gray-100">
                {sub.title}
              </p>
              <p className="text-left text-gray-900 text-opacity-60 dark:text-gray-50">
                {sub.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
