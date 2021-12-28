import HeroCarousel from '../components/HeroCarousel'
import SubHero from '../components/SubHero'
export default function Home({ hero, subhero }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <HeroCarousel hero={hero} />
      <SubHero subhero={subhero} />
    </div>
  )
}

export async function getStaticProps() {
  const hero = {
    title: 'Courses in every technology.',
    subtitle:
      'Courses in every technology required to make you an expert on programming.',
  }
  const subhero = [
    [
      'understand',
      'Understand',
      'hard programming concepts explained in the simplest way.',
    ],
    [
      'create',
      'Create',
      'Learn by creating in modern technologies on every device.',
    ],
    ['grow', 'Grow', 'be an expect on technologies you love.'],
  ]
  const support = []
  const subsribe = []
  return {
    props: {
      hero: hero,
      subhero: subhero,
    },
  }
}
