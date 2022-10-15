import { GetStaticProps } from 'next'
import SupAnnouncement from '../components/support/SupAnnouncement'
import SupCard from '../components/support/SupCard'
import SupCustomer from '../components/support/SupCustomer'
import SupHero from '../components/support/SupHero'
import TitleSup from '../components/support/TitleSup'
import type {
  BenefitsProps,
  KeyFeaturesProps,
  SupHeroProps,
} from '../lib/types/support'

export default function Support({
  keyfeatures,
  supHero,
  BenefitsStr,
}: {
  keyfeatures: KeyFeaturesProps[]
  supHero: SupHeroProps
  BenefitsStr: BenefitsProps
}): JSX.Element {
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
        title="key features"
        subtitle="cutting edge technologies from start to finish. Web, mobile and more. Complete courses to take you to the next level. Getting started is easy."
      >
        <SupCustomer />
      </TitleSup>
      <SupAnnouncement
        title="Get Started Today"
        subtitle="The fastest growing market mobile development is being taught and difficult concepts explained"
        buttonstr="Get Started"
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
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
    props: { keyfeatures, supHero, BenefitsStr },
  }
}
