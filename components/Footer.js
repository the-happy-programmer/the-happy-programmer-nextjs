import Svgtoreact from './Svgtoreact'
import Link from 'next/link'
import SvgtoReact from './Svgtoreact'
import { useRef, useState } from 'react'

export default function Footer() {
  const inputEl = useRef(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const currentYear = new Date().getFullYear()
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
    'courses/vue',
    'courses/reactjs',
    'courses/swift',
    'courses/nuxtjs',
    'courses/flutter',
    'courses/tailwind',
    'courses/frontity',
  ]

  const allLiks = (links) => {
    return (
      <div className="flex flex-col gap-y-2 pt-2">
        {links.map(([link, href]) => (
          <Link href={href} key={link}>
            <p className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
              {link}
            </p>
          </Link>
        ))}
      </div>
    )
  }

  const sub = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setError('Something went wrong! please, try a valid email.')
      setMessage(null)
      return
    }
    inputEl.current.value = ''
    setMessage('You are now subscribed')
    setError(null)
  }

  return (
    <div className="border-t border-gray-200 bg-gray-100 py-14  dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto flex w-60 flex-col justify-around space-y-10 text-center text-gray-400 dark:text-gray-500 sm:w-60 sm:flex-col sm:text-center md:w-full md:flex-row md:items-baseline md:text-left lg:w-full lg:flex-row lg:items-baseline lg:text-left xl:w-full xl:flex-row xl:items-baseline xl:text-left">
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
            <div className="flex flex-row justify-center space-x-5 pt-3 sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              {socials.map(([link, icon]) => (
                <Link href={link} key={link}>
                  <SvgtoReact
                    name={icon}
                    height={15}
                    className="cursor-pointer fill-current text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
                  />
                </Link>
              ))}
            </div>
            <p className="pt-8 pb-4">{followus.sub}</p>
            <form className="relative flex flex-col" onSubmit={sub}>
              <input
                type="email"
                name="email"
                placeholder="subscribe"
                ref={inputEl}
                className=" rounded-md bg-gray-700 py-4 pl-5 pr-10 text-gray-50 shadow-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                <SvgtoReact
                  name="email"
                  height={15}
                  width={15}
                  className="fill-current text-gray-400"
                />
              </div>
            </form>
            <div className="w-48 pt-5">
              {!message && error && (
                <>
                  <p className="text-xs text-danger">{error}</p>
                </>
              )}
              {!error && message && (
                <>
                  <p className="text-success">{message}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-7 pt-5">
        <div className="flex flex-row gap-x-5">
          {courses.map((icon) => (
            <Svgtoreact
              key={icon}
              className="fill-current text-gray-500"
              name={icon}
              height={30}
              width={30}
            />
          ))}
        </div>
        <div className="justify-self-auto fill-current stroke-current text-gray-500 dark:text-gray-400">
          <Svgtoreact name="fulllogo" height={20} width={100} />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Copyright © {currentYear} Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}
