import { GetStaticProps } from 'next'
import { useState } from 'react'
import SupAnnouncement from '../components/support/SupAnnouncement'
import SupCard from '../components/support/SupCard'
import SupCustomer from '../components/support/SupCustomer'
import SupHero from '../components/support/SupHero'
import TitleSup from '../components/support/TitleSup'
import type { TitleSubtitle } from '../lib/types/home'
import type {
  BenefitsProps,
  KeyFeaturesProps,
  SupHeroProps,
  SupportProps,
} from '../lib/types/support'

type price = 5 | 50

export default function Support({
  keyfeatures,
  supHero,
  BenefitsStr,
  customerReview,
  startToday,
}: SupportProps): JSX.Element {
  const [price, setPrice] = useState<price>(5)
  return (
    <>
      <SupHero strings={supHero} />
      <TitleSup
        title={BenefitsStr.title as string}
        subtitle={BenefitsStr.subtitle as string}
        tag={BenefitsStr.tag}
      >
        <div className="flex flex-row flex-wrap justify-between py-10">
          {keyfeatures.map((features: KeyFeaturesProps) => {
            return (
              <SupCard
                icon={features.icon}
                key={features.icon}
                title={features.title}
              />
            )
          })}
        </div>
      </TitleSup>

      <TitleSup
        title={customerReview.title}
        subtitle={customerReview.subtitle as string}
      >
        <SupCustomer />
      </TitleSup>
      <SupAnnouncement
        title={startToday.title}
        subtitle={startToday.subtitle as string}
        buttonstr={startToday.buttonstr}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const startToday: SupHeroProps = {
    title: 'Get Started Today',
    subtitle:
      'The Happy Programmer is growing fast and we would love for you to join the journey. Learn all the concepts you need and get the means to start earning as as a developer.',
    buttonstr: 'Start Now',
  }

  const customerReview: TitleSubtitle = {
    title: 'What others say about us',
    subtitle:
      'users have said their opinion about us also we have special contributions in developing technologies for current time.',
  }

  const supHero: SupHeroProps = {
    tag: 'Fully-Features',
    title: 'Become an expert in programming',
    buttonstr: 'Get Started Today',
    features: [
      'Early Access',
      'Sub-only Courses',
      'Answer Questions',
      'Share source code',
      'Personal Mentoring',
      'Complete Projects',
    ],
  }
  const BenefitsStr: BenefitsProps = {
    title: 'Key Features',
    subtitle:
      'cutting edge technologies from start to finish. Web, mobile and more. Complete courses to take you to the next level. Getting started is easy.',
    tag: 'Development',
  }
  const keyfeatures: KeyFeaturesProps[] = [
    {
      icon: 'suppage/swift',
      title: 'apple ecosystem development',
    },
    {
      icon: 'suppage/web',
      title: 'web development',
    },
    {
      icon: 'suppage/server',
      title: 'server development',
    },
    {
      icon: 'suppage/mobile',
      title: 'mobile development',
    },
  ]
  return {
    props: { keyfeatures, supHero, BenefitsStr, customerReview, startToday },
  }
}
