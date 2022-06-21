import Svgtoreact from './Svgtoreact'
import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function Footer() {
  const socials = [
    ['https://twitter.com/happy_prog', 'twitter'],
    ['https://www.patreon.com/thehappyprogrammer', 'patreon'],
    [
      'https://www.facebook.com/The-Happy-Programmer-106178104593013',
      'facebook',
    ],
    ['https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg', 'youtube'],
    ['https://www.github.com/MyNameIsBond', 'github'],
  ]
  const followus = {
    title: 'Follow us',
    copyrights: 'Copyright © 2022 Inc. All rights reserved.',
    sub: 'subscribe to our newsletter',
  }
  const pages = {
    title: 'Pages',
    pages: [
      ['Home', '/'],
      ['Courses', '/courses'],
      ['Blog', '/blog'],
      ['About', '/about'],
    ],
  }
  const tags = {
    title: 'Tags',
    tags: [
      ['Swift', '/tag/swift'],
      ['SwiftUI', '/tag/swiftui'],
      ['Announcements', '/tag/announcements'],
      ['NuxtJS', '/tag/nuxtjs'],
    ],
  }
  const categories = {
    title: 'Categories',
    categories: [
      ['iOS', '/category/ios'],
      ['Xcode', '/category/xcode'],
      ['Design', '/category/design'],
      ['SwiftUI', '/category/swiftui'],
    ],
  }

  const courses = [
    'vue',
    'react',
    'swift',
    'nuxtjs',
    'flutter',
    'tailwind',
    'frontity',
  ]

  const allLiks = (links) => {
    return (
      <div className="flex flex-col gap-y-2 pt-2">
        {links.map(([link, href]) => (
          <Link href={href}>
            <p className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
              {link}
            </p>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="border-t border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto flex flex-row justify-around py-20 text-gray-400 dark:text-gray-500">
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">Pages</p>
          {allLiks(pages.pages)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">Tags</p>
          {allLiks(tags.tags)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            Categories
          </p>
          {allLiks(categories.categories)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            {followus.title}
          </p>
          <div>
            <div className="flex flex-row space-x-5 pt-3">
              {socials.map(([link, icon]) => (
                <Link href={link}>
                  <SvgtoReact
                    name={icon}
                    height={15}
                    className="cursor-pointer fill-current text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
                  />
                </Link>
              ))}
            </div>
            <p className="pt-8 pb-4">{followus.sub}</p>
            <div className="relative flex">
              <input
                type="text"
                placeholder="subscribe"
                className="rounded-md bg-gray-700 py-4 pl-5 pr-10 text-gray-50 shadow-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                <SvgtoReact
                  name="email"
                  height={15}
                  width={15}
                  className="fill-current text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
