import SvgtoReact from './Svgtoreact'

export default function SubHero({ subhero }) {
  return (
    <div className="border-t border-b border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="container  flex flex-row gap-x-4 ">
        {subhero.map(([icon, title, subtitle]) => (
          <div className="flex flex-col items-center py-20" key={icon}>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 p-4 dark:bg-gray-700">
              <SvgtoReact
                class="dark:fill-gray-100 dark:stroke-gray-100"
                height={35}
                name={icon}
              />
            </div>
            <div className="py-8 text-3xl font-bold dark:text-gray-100">
              {title} dolores
            </div>
            <div className="mx-10 text-center text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
