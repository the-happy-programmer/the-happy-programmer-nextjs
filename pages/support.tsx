import { GetStaticProps } from 'next'
import SupAnnouncement from '../components/support/SupAnnouncement'
import SupCard from '../components/support/SupCard'
import SupCustomer from '../components/support/SupCustomer'
import SupHero from '../components/support/SupHero'
import TitleSup from '../components/support/TitleSup'

interface KeyFeaturesProps {
  icon: string
  title: string
}

export default function Support({
  keyfeatures,
}: {
  keyfeatures: KeyFeaturesProps[]
}): JSX.Element {
  return (
    <>
      <SupHero />
      <TitleSup
        title="key features"
        subtitle="cutting edge technologies from start to finish. Web, mobile and more. Complete courses to take you to the next level. Getting started is easy."
        tag="Development"
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
    props: { keyfeatures },
  }
}
