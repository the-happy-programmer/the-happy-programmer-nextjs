import { SubHeroProps } from '@/lib/types/home'

export default function SubHero({ subhero }: SubHeroProps): JSX.Element {
  return (
    <div className="border-y border-divider bg-default-50">
      <div className="container">
        <div className="items-top container flex flex-col justify-between gap-x-10 px-3 sm:flex-col md:flex-row xl:flex-row">
          {subhero.map((sub) => (
            <div
              className="flex max-w-md flex-row items-start gap-x-5 py-8 sm:py-8 md:py-28 lg:py-28 xl:py-28"
              key={sub.title}
            >
              <div className="rounded-md bg-gradient-to-r from-secondary to-primary p-4">
                <sub.icon
                  className="my-auto fill-background stroke-background"
                  height={20}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">{sub.title}</p>
                <p className="text-left text-default-600">{sub.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
