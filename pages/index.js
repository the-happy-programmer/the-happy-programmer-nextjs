import HappyButton from '../components/Happybutton'
import SvgtoReact from '../components/Svgtoreact'

export default function Home({ hero }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <div className='flex container py-20 px-4'>
        <div className='w-96'>
          <h1 className='text-5xl font-bold dark:text-gray-100'>
            {hero.title}
          </h1>
          <p className='text-lg py-10 text-gray-600 dark:text-gray-200'>
            {hero.subtitle}
          </p>
          <HappyButton xl={true}>Subsribe</HappyButton>
        </div>
        <div>
          <SvgtoReact name='heromobile'></SvgtoReact>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const hero = {
    title: 'Courses in every technology.',
    subtitle:
      'Courses in every technology required to make you an expert on programming.',
  }
  const subhero = []
  const support = []
  const subsribe = []
  return {
    props: {
      hero: hero,
    },
  }
}
