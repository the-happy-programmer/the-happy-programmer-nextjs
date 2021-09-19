import Headerlayout from "../widget/Headerlayout"
import Image from "next/image"
import Me from "../public/me.jpeg"
import SvgtoReact from "../components/Svgtoreact"
export default function About({ socials, projects }) {
  return (
    <div className='container'>
      <div className='border-b '>
        <Headerlayout>
          <Image src={Me} className='rounded-full' height={150} width={150} />
        </Headerlayout>
      </div>
      <div className=''>
        {projects.map(([svg, desc, link]) => (
          <div key={svg} className=''>
            <SvgtoReact name={svg} height={45} />
            <p>{desc}</p>
            <p>{link}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function getStaticProps() {
  const pic = {
    src: "",
  }

  const author = {
    desc: "My name is Tony",
    job: "And I am a Software Engineer",
    mail: "info@thehappyprogramer.com",
  }

  const socials = [
    ["https://twitter.com/happy_prog", "twitter"],
    ["https://www.patreon.com/thehappyprogrammer", "patreon"],
    [
      "https://www.facebook.com/The-Happy-Programmer-106178104593013",
      "facebook",
    ],
    ["https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA", "youtube"],
  ]
  const projects = [
    [
      "nuxtjs",
      "in NuxtJS you will see replicates of numerous websites including this one.",
      "https://github.com/MyNameIsBond/nuxthappyweb",
    ],
    [
      "python",
      "python is very strong when dealing with strings, on The Happy Programmer we will be creating some interesting projects",
      "https://github.com/MyNameIsBond/exercises_2nd_year",
    ],
    [
      "django",
      "Django's main strength is a fast back end. Python helps a lot to make it simple and less crowded",
      "https://github.com/MyNameIsBond/Django---Blog",
    ],
    [
      "flutter",
      "Flutter is arguably the hottest kid in the neighborhood, In The Happy Programmer we will be creating numerous full projects on Flutter",
      "https://github.com/MyNameIsBond/eventApp",
    ],
    [
      "frontity",
      "Frontity is a WordPress focus ReactJS framework that avoids using GraphQL to create headless cms. A replica of this website too is being created on Frontity follow the link below.",
      "https://github.com/MyNameIsBond/the-happy-programmer",
    ],
    [
      "nextjs",
      "NextJS is growing so rapidly that The Happy Programmer has included a couple of projects including this website.",
      "https://github.com/MyNameIsBond/the-happy-programmer-nextjs",
    ],
    [
      "vue",
      "Vue is a very easy-to-learn JavaScript framework very interesting to see how it creates fast websites.",
      "https://github.com/MyNameIsBond/nuxthappyweb",
    ],
    [
      "reactnative",
      "using React Native you can create apps for iOS and Android, The Happy Programmer will focus highly on React Native.",
      "https://github.com/MyNameIsBond/UberEatsReactNative",
    ],
    [
      "swift",
      "Swift is one of the core subjects in The Happy Programmer and will be examined to it is core.",
      "https://github.com/MyNameIsBond?tab=repositories",
    ],
    [
      "swiftui",
      "SwiftUI is the new framework which is based in Swift and will replace UIKit",
      "https://github.com/MyNameIsBond?tab=repositories",
    ],
  ]
  return {
    props: {
      socials: socials,
      projects: projects,
    },
  }
}
