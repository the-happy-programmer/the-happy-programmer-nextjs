import Link from 'next/link'
import SvgtoReact from '../Svgtoreact'
import { useState } from 'react'
import scroll from '../../lib/scroll'

// lol

export default function Search({ posts, setSearching }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchList, setSearchList] = useState([])
  const filterItems = (arr, query) => {
    return arr.filter(
      (el) =>
        el.node.excerpt?.toLowerCase().includes(query) ||
        el.node.title?.toLowerCase().includes(query)
    )
  }

  const closeSearch = (e) => {
    scroll('auto')
    setSearching(false)
  }

  const changeInput = (e) => {
    if (e.target.value === '') {
      setSearchList([])
      setSearchQuery(e.target.value)
      return
    }
    setSearchQuery(e.target.value.toLowerCase())
    setSearchList(filterItems(posts, e.target.value.toLowerCase()))
    return
  }

  const icontitle = (tag) =>
    tag.map((tag) => (
      <div className="" key={tag.slug}>
        <SvgtoReact
          height={20}
          width={20}
          class=""
          name={tag.slug.toLowerCase()}
        />
      </div>
    ))

  return (
    <div
      tabIndex="0"
      className="fixed top-0 bottom-0 left-0 right-0
     z-50 h-screen w-screen bg-gray-200 bg-opacity-95 dark:bg-gray-800"
    >
      <div className="container m-auto mt-10 h-2/4 w-11/12 max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:mt-20 sm:w-full md:mt-32 lg:mt-32 xl:mt-32">
        <div className="sticky top-0">
          <div className="relative flex h-16 w-full border-b border-gray-200 dark:border-gray-700">
            <div className="absolute inset-y-0 left-0 ml-6 flex items-center">
              <SvgtoReact
                height={20}
                width={20}
                name="search"
                className="stroke-current text-gray-300 dark:text-gray-200"
              />
            </div>
            <input
              type="text"
              onChange={changeInput}
              placeholder="Search posts..."
              className="outline-none rounder-t w-full rounded-t-2xl bg-gray-50 p-3 px-16 text-gray-900 placeholder-gray-300 dark:bg-gray-800 dark:text-gray-50"
            />
            <div
              onClick={(e) => closeSearch(e)}
              className="absolute inset-y-0 right-0 mr-6 flex items-center bg-gray-50 dark:bg-gray-800"
            >
              <div className="cursor-pointer rounded-md border border-gray-200 fill-current p-1 text-xs text-gray-300 hover:border-gray-300 hover:text-gray-500 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-gray-400">
                ESC
              </div>
            </div>
          </div>
        </div>
        <div>
          {searchList.length === 0 && searchQuery !== '' && (
            <div className="p-5">
              <div className=" text-gray-500 dark:text-gray-300">
                no results for{' '}
                <span className="text-gray-900 dark:text-gray-50">
                  &quot;{searchQuery}&quot;
                </span>
                <ul className="py-3 text-accent dark:text-darkaccent">
                  <li className="py-3">
                    <Link href="/" passHref>
                      <a className="cursor-pointer hover:underline">
                        The Hapy Programmer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://happynuxtjs.com/" passHref>
                      <a className="cursor-pointer hover:underline">
                        Happy NuxtJS
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {searchQuery === '' ? (
            <div className="flex items-center justify-center">
              <div className="my-auto p-10 text-gray-300 dark:text-gray-500">
                Search for posts
              </div>
            </div>
          ) : (
            <div className="mb-auto text-gray-200">
              {searchList.length > 0 && (
                <div className="flex flex-row items-center justify-between border-b border-gray-200 px-7 py-8 dark:border-gray-700">
                  <p className="font-bold text-gray-800 dark:text-gray-100">
                    Posts
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">
                    {searchList.length} posts found
                  </p>
                </div>
              )}
              {searchList.map((post) => (
                <div key={post.node.title} className="h-full rounded-t-3xl">
                  <Link href={`/${post.node.slug}`}>
                    <div
                      onClick={(e) => closeSearch(e)}
                      className="cursor-pointer border-b border-gray-200 px-7 py-6 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex flex-row items-center justify-between">
                        {icontitle(post.node.tags.nodes)}
                        <p className=" text-md mr-auto pl-4 font-semibold text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                          {post.node.title}
                        </p>
                        <div>
                          <SvgtoReact
                            name="arrow-right"
                            className="cursor-pointer justify-self-end fill-current text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                            height={15}
                            width={15}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="sticky bottom-0 flex w-full justify-end rounded-b-2xl border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <div className="fill-current stroke-current  p-4 text-gray-700 dark:text-gray-400">
              <SvgtoReact name="fulllogo" height={30} width={75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
