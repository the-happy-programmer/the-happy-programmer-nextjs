import type { TitleSubtitle } from '@/lib/types/home'
import HeroCode from '@/public/svg/herocode.svg'
import { Button } from '@nextui-org/button'
export default function HeroCarousel({
  title,
  subtitle,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(94% 12%, 93% 99%, 49% 59%, 0% 100%, 48% 39%, 86% 78%)',
          }}
        />
      </div>
      <div className="container flex flex-col-reverse items-center justify-between px-4 py-8 text-center sm:flex-col-reverse sm:py-20 sm:text-center md:flex-row md:py-20 md:text-left lg:flex-row lg:py-20 lg:text-left xl:flex-row xl:py-20 xl:text-left">
        <div className="w-96">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-default-900 to-default-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {title}
          </h1>
          <p className="px-2 py-8 text-lg text-default-400 sm:px-0 md:px-0 lg:px-0 xl:px-0">
            {subtitle}
          </p>
          <Button
            disableRipple
            color="primary"
            size="lg"
            variant="shadow"
            href="#subscribe"
          >
            Subscribe
          </Button>
        </div>
        <div>
          <div className="h-96">
            <HeroCode className="h-96 fill-content1" />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(94% 12%, 93% 99%, 49% 59%, 0% 100%, 48% 39%, 86% 78%)',
          }}
        />
      </div>
    </div>
  )
}
