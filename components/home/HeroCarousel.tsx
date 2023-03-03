import HappyButton from '../Happybutton'
import SvgtoReact from '../Svgtoreact'
import type { TitleSubtitle } from '../../lib/types/home'

export default function HeroCarousel({
  title,
  subtitle,
  icon,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="container flex flex-col-reverse items-center justify-between py-8 px-4 text-center sm:flex-col-reverse sm:py-20 sm:text-center md:flex-row md:py-20 md:text-left lg:flex-row lg:py-20 lg:text-left xl:flex-row xl:py-20 xl:text-left">
      <div className="w-96">
        <h1 className="text-4xl font-bold dark:text-gray-100  sm:text-4xl  md:text-5xl lg:text-5xl xl:text-5xl">
          {title}
        </h1>

        <p className="py-10 px-2 text-lg text-gray-600 dark:text-gray-200 sm:px-0 md:px-0 lg:px-0 xl:px-0">
          {subtitle}
        </p>
        <HappyButton xl={true} href="#subscribe">
          Subscribe
        </HappyButton>
      </div>
      <div>
        <div className="h-96">
          <SvgtoReact name={icon} className="h-96" />
        </div>
      </div>
    </div>
  )
}
