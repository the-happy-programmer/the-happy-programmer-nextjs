import HappyButton from '../Happybutton';
import Carousel from './Carousel';

export default function HeroCarousel({ hero }) {
  return (
    <div className='flex container py-20 px-4 items-center justify-between'>
      <div className='w-96'>
        <h1 className='text-5xl font-bold dark:text-gray-100'>{hero.title}</h1>
        <p className='text-lg py-10 text-gray-600 dark:text-gray-200'>
          {hero.subtitle}
        </p>
        <HappyButton xl={true}>Subsribe</HappyButton>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
