import HappyButton from '../Happybutton'
import SvgtoReact from '../Svgtoreact'

export default function HeroCarousel({ hero }) {
  return (
    <div className="container flex flex-col-reverse items-center justify-between py-20 px-4 text-center sm:flex-col-reverse sm:text-center md:flex-row md:text-left lg:flex-row lg:text-left xl:flex-row xl:text-left">
      <div className="w-96">
        <h1 className="text-4xl font-bold  dark:text-gray-100  sm:text-4xl  md:text-5xl lg:text-5xl xl:text-5xl">
          {hero.title}
        </h1>
        <p className="py-10 text-lg text-gray-600 dark:text-gray-200">
          {hero.subtitle}
        </p>
        <HappyButton xl={true} href="#subscribe">
          Subsribe
        </HappyButton>
      </div>
      <div>
        <div className="h-96">
          <SvgtoReact name="herocode" className="h-96" />
        </div>
      </div>
    </div>
  )
}
