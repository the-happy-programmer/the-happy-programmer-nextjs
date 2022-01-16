import HeroCarousel from '../components/home/HeroCarousel';
import SubHero from '../components/home/SubHero';
import Subscribe from '../components/home/Subscribe';
import Support from '../components/home/Support';

export default function Home({ hero, subhero, subscribe }) {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <HeroCarousel hero={hero} />
      <SubHero subhero={subhero} />
      <Support />
      <Subscribe subtitle={subscribe.subtitle} title={subscribe.title} />
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
  const support = [''];
  const subscribe = {
    title: 'Subscribe',
    subtitle:
      'Subscribe to get notified for new content and course that will come in the near future. In any way you will not get spammed or your data being shared',
  };
  return {
    props: {
      hero: hero,
      subhero: subhero,
      subscribe: subscribe,
    },
  };
}
