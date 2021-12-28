import HappyButton from '../components/Happybutton'
import HeroCarousel from '../components/HeroCarousel'
import SvgtoReact from '../components/Svgtoreact'

export default function Home({ hero }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <HeroCarousel hero={hero} />
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
