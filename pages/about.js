import Headerlayout from "../widget/Headerlayout"
import Image from "next/image"
import Me from "../public/me.jpg"
import SvgtoReact from "../components/Svgtoreact"
import HappyLink from "../components/HappyLink"
export default function About({ socials, projects }) {
  return (
    <div className=' bg-gray-50 dark:bg-gray-900'>
      <div className=''>
        <div className='border-b dark:border-gray-600'>
          <div className='container'>
            <Headerlayout>
              <Image
                src={Me}
                className='rounded-full'
                height={150}
                width={150}
              />
            </Headerlayout>
          </div>
        </div>
        <div className='bg-gray-100 dark:bg-gray-800'>
          <p className='container text-gray-800 dark:text-gray-50 px-3 py-8 text-2xl'>
            Experience.{" "}
            <span className='dark:text-gray-400 text-gray-500'>
              You can see my projects on GitHub
            </span>
          </p>
          <div className='grid grid-cols-4 px-2 gap-5 container'>
            {projects.map(([svg, desc, link]) => (
              <div
                key={svg}
                className='flex flex-col bg-gray-50 dark:bg-gray-900 p-5 border dark:border-gray-600 rounded-xl'
              >
                <div className='py-5'>
                  <SvgtoReact
                    className='fill-current dark:text-gray-50'
                    name={svg.toLowerCase()}
                    height={45}
                  />
                </div>
                <p className='text-2xl dark:text-gray-50'>{svg}</p>
                <p className='leading-loose text-gray-600 dark:text-gray-300 py-2'>
                  {desc}
                </p>
                <HappyLink
                  classes='dark:text-gray-50 font-bold justify-between mt-auto flex items-center'
                  href={link}
                >
                  Projects{" "}
                  <SvgtoReact
                    name='arrow'
                    className='transform fill-current -rotate-90 dark:text-gray-50'
                    height={15}
                  />
                </HappyLink>
              </div>
            ))}
          </div>
        </div>
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
      "NuxtJS",
      "in NuxtJS you will see replicates of numerous websites including this one.",
      "https://github.com/MyNameIsBond/nuxthappyweb",
    ],
    [
      "Python",
      "on The Happy Programmer we will be creating some interesting projects",
      "https://github.com/MyNameIsBond/exercises_2nd_year",
    ],
    [
      "Django",
      "Django's main strength is a fast back end. Python helps a lot to make it simple and less crowded",
      "https://github.com/MyNameIsBond/Django---Blog",
    ],
    [
      "Flutter",
      "In The Happy Programmer we will be creating numerous full projects on Flutter",
      "https://github.com/MyNameIsBond/eventApp",
    ],
    [
      "Frontity",
      "A replica of this website too is being created using Frontity follow the link below.",
      "https://github.com/MyNameIsBond/the-happy-programmer",
    ],
    [
      "NextJS",
      "The Happy Programmer has included a couple of projects including this website.",
      "https://github.com/MyNameIsBond/the-happy-programmer-nextjs",
    ],
    [
      "Vue",
      "Vue is a very easy-to-learn JavaScript framework very interesting to see how it creates fast websites.",
      "https://github.com/MyNameIsBond/nuxthappyweb",
    ],
    [
      "React",
      "The Happy Programmer will focus highly on React Native.",
      "https://github.com/MyNameIsBond/UberEatsReactNative",
    ],
    [
      "Swift",
      "Swift is one of the core subjects in The Happy Programmer and will be examined to it is core.",
      "https://github.com/MyNameIsBond?tab=repositories",
    ],
    [
      "SwiftUI",
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
