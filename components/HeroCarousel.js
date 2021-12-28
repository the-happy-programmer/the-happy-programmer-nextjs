import styles from '../styles/hero.module.css'
import HappyButton from './Happybutton'
import SvgtoReact from './Svgtoreact'

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
        <SvgtoReact name='heromobile'></SvgtoReact>
      </div>
    </div>
  )
}
