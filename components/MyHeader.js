import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function MyHeader({ title, subtitle, posts }) {
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchList, setSearchList] = useState([])
  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      return (
        el.node.excerpt?.toLowerCase().includes(query) ||
        el.node.title.toLowerCase().includes(query)
      )
    })
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

  return (
    <div className="container px-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-20">
      <h2 className="text-gray-500 dark:text-gray-300 ">{subtitle}</h2>
      <h1 className="mt-1 text-4xl font-semibold capitalize dark:text-gray-50">
        {title}
      </h1>
      <div className="group w- relative float-left mt-10">
        <div className="absolute inset-y-0 left-0 ml-3.5 flex items-center">
          <SvgtoReact
            height={12}
            width={12}
            name="search"
            className="stroke-current text-gray-200 group-hover:text-gray-600 dark:text-gray-500"
          />
        </div>
        <button
          type="text"
          className="focus:outline-none rounded-md border border-gray-200 py-2 pl-9 pr-6 text-gray-300 focus:border-gray-700 group-hover:border-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500"
          onClick={(e) => {
            document.body.style.overflow = 'hidden'
            return setSearching(true)
          }}
        >
          Search posts...
        </button>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-50
         h-screen w-screen bg-gray-200 bg-opacity-95 dark:bg-gray-800 ${
           searching ? 'block' : 'hidden'
         }`}
      >
        <div className="mx-auto mt-10 h-2/4 w-3/4 overflow-y-scroll rounded-3xl border border-gray-200 bg-gray-100 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
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
                className="outline-none text-grat w-full bg-gray-100 p-3  px-16 text-gray-900 placeholder-gray-300 dark:bg-gray-800 dark:text-gray-50"
              />
              <div
                onClick={(e) => {
                  document.body.style.overflow = 'auto'
                  setSearching(false)
                }}
                className="absolute inset-y-0 right-0 mr-6 flex items-center"
              >
                <SvgtoReact
                  name="cancel"
                  height={18}
                  width={18}
                  className="cursor-pointer fill-current text-gray-300 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="mb-auto w-full  text-gray-200">
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
              <div key={post.node.title} className="group">
                <div className="cursor-pointer border-b border-gray-200 px-7 py-6 group-hover:bg-gray-200 dark:border-gray-700 dark:group-hover:bg-gray-700">
                  <div className="flex flex-row items-center justify-between">
                    <div
                      onClick={(e) => {
                        console.log('clicked')
                        document.body.style.overflow = 'auto'
                      }}
                    >
                      <Link href={`/${post.node.slug}`}>
                        <p className=" text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-50">
                          {post.node.title}
                        </p>
                      </Link>
                    </div>
                    <SvgtoReact
                      onClick={(e) => console.log('clicked')}
                      name="cancel"
                      className="cursor-pointer fill-current text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-500"
                      height={18}
                      width={18}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
