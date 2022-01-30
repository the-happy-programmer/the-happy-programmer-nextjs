import HappyButton from '../Happybutton';
import SvgtoReact from '../Svgtoreact';

export default function HeroCarousel({ hero }) {
  return (
    <div className='text-center sm:text-center md:text-left lg:text-left xl:text-left flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row container py-20 px-4 items-center justify-between'>
      <div className='w-96'>
        <h1 className='text-4xl sm:text-4xl  md:text-5xl  lg:text-5xl  xl:text-5xl font-bold dark:text-gray-100'>
          {hero.title}
        </h1>
        <p className='text-lg py-10 text-gray-600 dark:text-gray-200'>
          {hero.subtitle}
        </p>
        <HappyButton xl={true} href='#subscribe'>
          Subsribe
        </HappyButton>
      </div>
      <div>
        <div className='h-96'>
          <SvgtoReact name='herocode' className='h-96' />
        </div>
      </div>
    </div>
  );
}
