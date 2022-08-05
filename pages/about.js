import Headerlayout from '../widget/Headerlayout'
import DisplayInfo from '../widget/DisplayInfo'
import DisplayCard from '../components/about/DisplayCard'
import SvgtoReact from '../components/Svgtoreact'
import DropDownContainer from '../components/about/DropDownContainer.tsx'
import Meta from '../components/seo/Meta'

export default function About({ socials, projects, author, info, seo }) {
  return (
    <div className=" bg-gray-50 dark:bg-gray-900">
      <Meta title={seo.title} description={seo.metaDesc} />
      <div className="dark:border-gray-700">
        <Headerlayout>
          <div className="container flex flex-col items-center justify-center pt-5 text-center sm:flex-row sm:pt-16 sm:text-left md:flex-row md:pt-16 md:text-left lg:flex-row lg:pt-16 lg:text-left xl:flex-row xl:pt-16 xl:text-left">
            <div>
              <SvgtoReact height={150} name="face" />
            </div>

            <div className="my-auto text-gray-900 dark:text-gray-50 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8">
              <h1 className="text-4xl font-semibold">{author.desc}</h1>
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
        <div className="border-t bg-gray-100 py-10 dark:border-gray-700 dark:bg-gray-800">
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
          <DropDownContainer title="Know more about me" info={info} />
        </div>
      </div>
    </div>
  )
}

export function getStaticProps() {
  const seo = {
    title: 'My Name Is Tony',
    metaDesc:
      'I have developed numerous of iOS and Android apps. I have been participated in many open sourse projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic with programming and technology.',
  }

  const info = [
    [
      'My studies',
      'I studied at the University of Coventry in the UK where I graduated with a first-class degree on Computer Science during my studies, I was awarded second best website among 2-3 thousand students',
    ],
    [
      'Do I do freelance?',
      'Yes, I still do freelance projects. not as many nowadays as I used to but you can always email me to talk on your idea and if we both are happy we can carry on',
    ],
    [
      'My objectives',
      'my objectives for the running year are to grow my YouTube channel, and finish the Swift course  I am working on',
    ],
  ]

  const author = {
    desc: 'My name is Tony',
    job: 'I am a Software Engineer',
    mail: 'info@thehappyprogrammer.com',
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
      'https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg',
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
      info: info,
      socials: socials,
      projects: projects,
      author: author,
      seo: seo,
    },
  }
}
