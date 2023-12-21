import { SubHeroProps } from '@/lib/types/home'

export default function SubHero({ subhero }: SubHeroProps): JSX.Element {
  return (
    <div className="border-t border-b border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800">
      <div className="container flex flex-col items-center justify-between gap-x-10  px-3 sm:flex-col md:flex-row xl:flex-row">
        {subhero.map((sub) => (
          <div
            className="flex max-w-md flex-row items-center gap-x-4 py-8 sm:py-8 md:py-28 lg:py-28 xl:py-28 "
            key={sub.title}
          >
            <div className="rounded-md bg-gradient-to-r from-blue-400  to-blue-700 p-4">
              <sub.icon
                className="fill-current stroke-current text-stone-100  dark:text-stone-800"
                height={20}
              />
            </div>
            <div className="">
              <p className="text-md font-semibold dark:text-stone-100">
                {sub.title}
              </p>
              <p className="text-left text-default-900 text-opacity-60 dark:text-stone-50">
                {sub.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
