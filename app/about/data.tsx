import { AboutAuthor, AboutInfo } from '@/lib/types/about'

const info: AboutInfo['info'] = [
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

const author: AboutAuthor = {
  desc: 'My name is Tony',
  job: 'I am a Software Engineer',
  mail: 'info@thehappyprogrammer.com',
}

const socials: AboutInfo['info'] = [
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

const projects: AboutInfo['info'] = [
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

export { projects, socials, author, info }
