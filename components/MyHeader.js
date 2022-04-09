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
      <div className="relative mt-10 flex">
        <div className="absolute inset-y-0 left-0 ml-3.5 flex items-center">
          <SvgtoReact
            height={12}
            width={12}
            name="search"
            className="stroke-current dark:text-gray-500"
          />
        </div>
        <button
          type="text"
          className="focus:outline-none rounded-md border border-gray-700 py-2 pl-9 pr-6 focus:border-gray-700 dark:bg-gray-900 dark:text-gray-500"
          onClick={(e) => {
            document.body.style.overflow = 'hidden'
            return setSearching(true)
          }}
        >
          Search posts...
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 z-50 flex h-screen w-screen bg-opacity-95 dark:bg-gray-800 ${
          searching ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto mt-10 h-2/4 w-3/4 overflow-y-scroll rounded-3xl border bg-gray-800 dark:border-gray-700">
          <div className="relative flex h-16 w-full border-b dark:border-gray-700">
            <div className="absolute inset-y-0 left-0 ml-6 flex items-center">
              <SvgtoReact
                height={20}
                width={20}
                name="search"
                className="stroke-current dark:text-gray-500"
              />
            </div>
            <input
              type="text"
              onChange={changeInput}
              placeholder="Search posts..."
              className="outline-none text-grat w-full bg-gray-800 p-3 px-16 text-gray-50"
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
                className="cursor-pointer fill-current dark:text-gray-400 dark:hover:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-auto w-full  text-gray-200">
            {searchList.length > 0 && (
              <div className="flex flex-row items-center justify-between border-b border-gray-700 px-7 py-8">
                <p className="font-bold">Posts</p>
                <p className="text-sm dark:text-gray-400">
                  {searchList.length} posts found
                </p>
              </div>
            )}
            {searchList.map((post) => (
              <div key={post.node.title} className="group">
                <div className="cursor-pointer border-b border-gray-700 px-7 py-6 group-hover:bg-gray-700">
                  <div className="flex flex-row items-center justify-between">
                    <div
                      onClick={(e) => {
                        console.log('clicked')
                        document.body.style.overflow = 'auto'
                      }}
                    >
                      <Link href={`/${post.node.slug}`}>
                        <p className=" text-gray-300 group-hover:text-gray-50">
                          {post.node.title}
                        </p>
                      </Link>
                    </div>
                    <SvgtoReact
                      onClick={(e) => console.log('clicked')}
                      name="cancel"
                      className="cursor-pointer fill-current dark:text-gray-500 dark:hover:text-gray-400"
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
