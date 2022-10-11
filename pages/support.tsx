import SupCard from '../components/support/SupCard'
import SupHero from '../components/support/SupHero'
import TitleSup from '../components/support/TitleSup'
export default function Support({}: {}): JSX.Element {
  return (
    <>
      <SupHero />
      <TitleSup
        title="key features"
        subtitle="cutting edge technologies from start to finish. Web, mobile and more. Complete courses to take you to the next level. Getting started is easy."
        tag="Development"
      >
        <SupCard icon="suppage/swift" title="mobile development" />
        <SupCard icon="suppage/swift" title="mobile development" />
        <SupCard icon="suppage/swift" title="mobile development" />
        <SupCard icon="suppage/swift" title="mobile development" />
      </TitleSup>
    </>
  )
}
