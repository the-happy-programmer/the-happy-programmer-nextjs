import HeroCarousel from '../components/home/HeroCarousel';
import SubHero from '../components/home/SubHero';
import Subscribe from '../components/home/Subscribe';

export default function Home({ hero, subhero }) {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <HeroCarousel hero={hero} />
      <SubHero subhero={subhero} />
      <Subscribe />
    </div>
  );
}

export async function getStaticProps() {
  const hero = {
    title: 'Courses in every technology.',
    subtitle:
      'Courses in every technology required to make you an expert on programming.',
  };
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
    ['grow', 'Grow', 'be an expect and See your self grow to a professional.'],
  ];
  const support = [];
  const subsribe = [];
  return {
    props: {
      hero: hero,
      subhero: subhero,
    },
  };
}
