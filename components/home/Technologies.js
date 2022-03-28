import HappyLink from '../HappyLink'
import SvgtoReact from '../Svgtoreact'

export default function Technologies({ title, subtitle, icons }) {
  return (
    <div className="border-b border-gray-200 py-20  dark:border-gray-700">
      <div className="container flex flex-col place-content-center items-center justify-between px-3 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="grid grid-cols-4 justify-items-center gap-10 sm:gap-10 md:gap-20 lg:gap-20 xl:gap-20">
          {icons.map((icon) => (
            <SvgtoReact
              key={icon}
              name={icon}
              className="fill-current text-gray-900 dark:text-gray-50"
              height={45}
            />
          ))}
        </div>
        <div className="w-80">
          <p className="text-3xl font-bold dark:text-gray-50">{title}</p>
          <p className="py-8 dark:text-gray-300">{subtitle}</p>
          <HappyLink
            href={'/about'}
            classes="dark:text-darkaccent text-accent bg-gray-300"
          >
            <div className="flex flex-row items-center gap-x-3">
              Learn more about our courses
              <SvgtoReact
                name="arrow"
                height={15}
                className="-rotate-90 transform fill-current text-accent dark:text-darkaccent"
              />
            </div>
          </HappyLink>
        </div>
      </div>
    </div>
  )
}
