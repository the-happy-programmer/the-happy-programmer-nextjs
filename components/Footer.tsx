'use client'
import Svgtoreact from './Svgtoreact'
import Link from 'next/link'
import SvgtoReact from './Svgtoreact'
import { useRef, useState } from 'react'

interface FooterProps {
  title: string
  pages: string[][]
}

export default function Footer(): JSX.Element {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const currentYear: number = new Date().getFullYear()

  const socials: string[][] = [
    ['https://twitter.com/happy_prog', 'twitter'],
    ['https://www.patreon.com/thehappyprogrammer', 'patreon'],
    [
      'https://www.facebook.com/The-Happy-Programmer-106178104593013',
      'facebook',
    ],
    ['https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg', 'youtube'],
    ['https://www.github.com/MyNameIsBond', 'github'],
  ]

  const followus: { title: string; copyrights: string; sub: string } = {
    title: 'Follow us',
    copyrights: 'Copyright © 2022 Inc. All rights reserved.',
    sub: 'subscribe to our newsletter',
  }

  const pages: FooterProps = {
    title: 'Pages',
    pages: [
      ['Home', '/'],
      ['Courses', '/courses'],
      ['Blog', '/blog'],
      ['About', '/about'],
    ],
  }

  const tags: FooterProps = {
    title: 'Tags',
    pages: [
      ['Swift', '/tag/swift'],
      ['SwiftUI', '/tag/swiftui'],
      ['Announcements', '/tag/announcements'],
      ['NuxtJS', '/tag/nuxtjs'],
    ],
  }

  const categories: FooterProps = {
    title: 'Categories',
    pages: [
      ['Announcements', '/category/announcements'],
      ['SwiftUI', '/category/swiftui'],
    ],
  }

  const courses: string[] = [
    'courses/vue',
    'courses/reactjs',
    'courses/swift',
    'courses/nuxtjs',
    'courses/flutter',
    'courses/tailwind',
    'courses/frontity',
  ]

  const allLiks = (links: string[][]): JSX.Element => {
    return (
      <div className="flex flex-col gap-y-2 pt-2">
        {links.map(([link, href]) => (
          <Link
            href={href}
            key={link}
            className="cursor-pointer text-sm hover:text-default-900 dark:hover:text-stone-50"
          >
            {link}
          </Link>
        ))}
      </div>
    )
  }

  const sub = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current && inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    inputEl.current && (inputEl.current.value = '')
    setMessage('You are now subscribed')
    setError(null)

    const { error } = await res.json()
    if (error) {
      setError('Something went wrong! please, try a valid email.')
      setMessage(null)
      return
    }
  }

  return (
    <div className="z-50 border-t border-stone-200 bg-stone-100 py-14  dark:border-stone-700 dark:bg-stone-800">
      <div className="container mx-auto flex w-60 flex-col justify-around space-y-10 text-center text-stone-600 dark:text-stone-500 sm:w-60 sm:flex-col sm:text-center md:w-full md:flex-row md:items-baseline md:text-left lg:w-full lg:flex-row lg:items-baseline lg:text-left xl:w-full xl:flex-row xl:items-baseline xl:text-left">
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">Pages</p>
          {allLiks(pages.pages)}
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">Tags</p>
          {allLiks(tags.pages)}
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            Categories
          </p>
          {allLiks(categories.pages)}
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            {followus.title}
          </p>
          <div>
            <div className="flex flex-row justify-center space-x-5 pt-3 sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              {socials.map(([link, icon]) => (
                <Link href={link} key={link} passHref>
                  <SvgtoReact
                    name={icon}
                    height={15}
                    className="cursor-pointer fill-current text-stone-500 hover:text-default-900 dark:hover:text-stone-50"
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
                className="rounded-md bg-stone-700 py-4 pl-5 pr-10 text-stone-50 shadow-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                <SvgtoReact
                  name="email"
                  height={15}
                  width={15}
                  className="fill-current text-stone-400"
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
              className="fill-current text-stone-500"
              name={icon}
              height={30}
              width={30}
            />
          ))}
        </div>
        <div className="justify-self-auto fill-current stroke-current text-stone-500 dark:text-stone-400">
          <Svgtoreact name="fulllogo" height={20} width={100} />
        </div>
        <p className="text-sm text-stone-400 dark:text-stone-500">
          Copyright © {currentYear} Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}
