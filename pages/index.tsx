import { GetStaticProps } from 'next'
import HeroCarousel from '../components/home/HeroCarousel'
import SubHero from '../components/home/SubHero'
import Subscribe from '../components/home/Subscribe'
import Technologies from '../components/home/Technologies'
import Meta from '../components/seo/Meta'
import DropDownContainer from '../components/about/DropDownContainer'
import type { SEOProps } from '../lib/types/seo'
import { supabase } from '../lib/utils/supabaseclient'
import { useEffect } from 'react'
import NewSupport from '../components/home/subscribe/NewSupport'
import { useUser } from '../lib/utils/useUser'
import type {
  SubHeroProps,
  TitleSubtitle,
  TitleSubIcons,
  SupportType,
  HomeProps,
} from '../lib/types/home'
import { useRouter } from 'next/router'

export default function Home({
  seo,
  hero,
  subhero,
  subscribe,
  support,
  moderntechnologies,
  info,
  supportDesc,
}: HomeProps): JSX.Element {
  const { user, isLoading, subscription } = useUser()
  const { replace } = useRouter()
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'PASSWORD_RECOVERY') {
        replace('/resetpassword')
      }
    })
  }, [replace])

  return (
    <>
      <Meta title={seo.title} description={seo.description}>
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
      <div className="overflow-hidden bg-gray-50 dark:bg-gray-900">
        <HeroCarousel
          title={hero.title}
          subtitle={hero.subtitle}
          icon={hero.icon}
        />
        <SubHero subhero={subhero} />
        <Technologies
          title={moderntechnologies.title}
          subtitle={moderntechnologies.subtitle}
        />
        {!subscription && <NewSupport />}
        <Subscribe subtitle={subscribe.subtitle} title={subscribe.title} />
        <DropDownContainer
          title="How else you can benefit from THP"
          info={info}
        />
      </div>
    </>
  )
}
