import Svgtoreact from './Svgtoreact'
import Link from 'next/link'

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
  const pages = { title: 'Pages', pages: ['Blog', 'Courses', 'About', 'Home'] }
  const tags = {
    title: 'Categories',
    tags: ['Swift', 'SwiftUI', 'Announcements', 'NuxtJS'],
  }
  const categories = {
    title: 'Categories',
    categories: ['iOS', 'Xcode', 'Uncategorized', 'SwiftUI'],
  }
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <div className="bg-white dark:bg-black container">
        <footer className="container mx-auto flex flex-row justify-between p-4">
          <div className="justify-self-auto fill-current stroke-current text-gray-700 dark:text-gray-400">
            <Svgtoreact name="fulllogo" height={30} width={100} />
          </div>
          <div className="flex flex-row">
            {socials.map(([href, icon]) => (
              <Link key={icon} href={href} aria-label={icon}>
                <a className="ml-5" aria-label={icon}>
                  <div className="cursor-pointer justify-self-auto fill-current p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                    <Svgtoreact name={icon} height={15} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
