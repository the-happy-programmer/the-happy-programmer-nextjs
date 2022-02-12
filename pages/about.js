import Headerlayout from '../widget/Headerlayout'
import DisplayInfo from '../widget/DisplayInfo'
import DisplayCard from '../components/DisplayCard'
import SvgtoReact from '../components/Svgtoreact'

export default function About({ socials, projects, author }) {
  return (
    <div className=" bg-gray-50 dark:bg-gray-900">
      <div className="dark:border-gray-700">
        <Headerlayout>
          <div className="container flex flex-col items-center justify-center pt-5 text-center sm:flex-row sm:pt-16 sm:text-left md:flex-row md:pt-16 md:text-left lg:flex-row lg:pt-16 lg:text-left xl:flex-row xl:pt-16 xl:text-left">
            <div className="h-36 w-36">
              <SvgtoReact height={150} name="face" />
            </div>

            <div className="my-auto pl-8 text-gray-900 dark:text-gray-50">
              <p className="text-4xl">{author.desc}</p>
              <p className="py-1 pb-4 text-gray-700 dark:text-gray-400">
                {author.job}
              </p>
              <a
                className="text-accent hover:underline dark:text-darkaccent"
                href={`mailto:${author.mail}`}
              >
                {author.mail}
              </a>
            </div>
          </div>
        </Headerlayout>
        <div className=" border-t bg-gray-100 py-10 dark:border-gray-700 dark:bg-gray-800">
          <DisplayInfo title="Socials" subtitle=" Follow me on my socials">
            {socials.map(([link, svg, desc]) => (
              <DisplayCard
                key={link}
                svg={svg}
                desc={desc}
                link={link}
                socials={true}
              />
            ))}
          </DisplayInfo>
          <DisplayInfo
            title="Experience"
            subtitle=" You can see my projects on GitHub"
          >
            {projects.map(([svg, desc, link]) => (
              <DisplayCard key={link} svg={svg} desc={desc} link={link} />
            ))}
          </DisplayInfo>
        </div>
      </div>
    </div>
  )
}

export function getStaticProps() {
  const author = {
    desc: 'My name is Tony',
    job: 'I am a Software Engineer',
    mail: 'info@thehappyprogramer.com',
  }

  const socials = [
    ['https://twitter.com/happy_prog', 'twitter', '@happy_prog'],
    [
      'https://www.patreon.com/thehappyprogrammer',
      'patreon',
      '/thehappyprogrammer',
    ],
    [
      'https://www.facebook.com/The-Happy-Programmer-106178104593013',
      'facebook',
      'The Happy Programmer',
    ],
    [
      'https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA',
      'youtube',
      'The Happy Programmer',
    ],
  ]
  const projects = [
    [
      'NuxtJS',
      'in NuxtJS you will see replicates of numerous websites including this one.',
      'https://github.com/MyNameIsBond/nuxthappyweb',
    ],
    [
      'Python',
      'on The Happy Programmer we will be creating some interesting projects',
      'https://github.com/MyNameIsBond/exercises_2nd_year',
    ],
    [
      'Django',
      "Django's main strength is a fast back end. Python helps a lot to make it simple and less crowded",
      'https://github.com/MyNameIsBond/Django---Blog',
    ],
    [
      'Flutter',
      'In The Happy Programmer we will be creating numerous full projects on Flutter',
      'https://github.com/MyNameIsBond/eventApp',
    ],
    [
      'Frontity',
      'A replica of this website too is being created using Frontity follow the link below.',
      'https://github.com/MyNameIsBond/the-happy-programmer',
    ],
    [
      'NextJS',
      'The Happy Programmer has included a couple of projects including this website.',
      'https://github.com/MyNameIsBond/the-happy-programmer-nextjs',
    ],
    [
      'Vue',
      'Vue is a very easy-to-learn JavaScript framework very interesting to see how it creates fast websites.',
      'https://github.com/MyNameIsBond/nuxthappyweb',
    ],
    [
      'React',
      'The Happy Programmer will focus highly on React Native.',
      'https://github.com/MyNameIsBond/UberEatsReactNative',
    ],
    [
      'Swift',
      'Swift is one of the core subjects in The Happy Programmer and will be examined to it is core.',
      'https://github.com/MyNameIsBond?tab=repositories',
    ],
    [
      'SwiftUI',
      'SwiftUI is the new framework which is based in Swift and will replace UIKit',
      'https://github.com/MyNameIsBond?tab=repositories',
    ],
  ]
  return {
    props: {
      socials: socials,
      projects: projects,
      author: author,
    },
  }
}
