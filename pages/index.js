import HeroCarousel from '../components/home/HeroCarousel'
import SubHero from '../components/home/SubHero'
import Subscribe from '../components/home/Subscribe'
import Support from '../components/home/Support'
import Technologies from '../components/home/Technologies'
import Meta from '../components/seo/Meta'
import DropDownContainer from '../components/about/DropDownContainer'
import { getAllSlugs } from '../lib/courseslib/api'
export default function Home({
  seo,
  hero,
  subhero,
  subscribe,
  support,
  moderntechnologies,
  info,
}) {
  return (
    <>
      <Meta title={seo.title} description={seo.desc}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://thehappyprogrammer.com/",
              "logo": "https://thehappyprogrammercom.wpcomstaging.com/wp-content/uploads/2022/04/logo-dark-mode.png"
            }`,
          }}
        />
      </Meta>
      <div className="bg-gray-50 dark:bg-gray-900">
        <HeroCarousel hero={hero} />
        <SubHero subhero={subhero} />
        <Technologies
          title={moderntechnologies.title}
          subtitle={moderntechnologies.subtitle}
          icons={moderntechnologies.icons}
        />
        <Support
          title={support.title}
          subtitle={support.subtitle}
          prices={support.prices}
          benefits={support.benefits}
        />
        <Subscribe subtitle={subscribe.subtitle} title={subscribe.title} />
        <DropDownContainer
          title="How else you can benefit from THP"
          info={info}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const info = [
    [
      'Sponsored Posts',
      'For any sponsored post, you can send us a message at our email address. We will get back to you as soon as possible. ',
    ],
    [
      'Advertise yourself',
      'You can advertise your business in this website, all you have to do is send an email with your banner and the time you want the AD to last. ',
    ],
    [
      'Ask questions',
      'You can always ask any questions you have to improve your experience',
    ],
    [
      'Source code',
      'The happy programmer provides source code to all members you can see the code by yourself.',
    ],
  ]
  const moderntechnologies = {
    icons: [
      'react',
      'tailwind',
      'python',
      'nextjs',
      'github',
      'swiftui',
      'nuxtjs',
      'vue',
      'flutter',
      'django',
      'swift',
      'frontity',
    ],
    title: 'Modern Technologies',
    subtitle: 'The most modern technologies available stay tuned for more',
  }

  const seo = {
    title: 'The Happy Programmer',
    desc: 'The Happy Programmer is a programming website focused on teaching programming technologies like iOS, Flutter and more. Courses in mobile development daily iOS and Flutter blog posts.',
  }
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
      'Learn by coding in modern technologies on every device.',
    ],
    ['grow', 'Grow', 'be an expert and See yourself grow to a professional.'],
  ]
  const support = {
    title: 'Support',
    subtitle: 'Please consider supporting this website monthly.',
    prices: ['£2,5', '£4', '£8'],
    benefits: [
      ['Early access', 'Patron-only updates', 'Chat community'],
      [
        'Early access',
        'Patron-only updates',
        'Chat community',
        'Share source code',
      ],
      [
        'Early access',
        'Patron-only updates',
        'Chat community',
        'Share source code',
        'Personal Mentoring',
      ],
    ],
  }
  const subscribe = {
    title: 'Subscribe',
    subtitle:
      'Subscribe to get notified of new content and course that will come in the near future. In any way, you will not get spammed or your data be shared',
  }
  return {
    props: {
      seo: seo,
      hero: hero,
      subhero: subhero,
      subscribe: subscribe,
      support: support,
      moderntechnologies: moderntechnologies,
      info: info,
    },
  }
}
