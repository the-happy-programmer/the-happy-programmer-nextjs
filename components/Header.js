import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function Header({ title, subtitle, posts }) {
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [searchList, setSearchList] = useState([])
  // to change the search
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
      <div className="relative mt-10">
        <SvgtoReact
          height={12}
          width={12}
          name="search"
          className={`${
            searching
              ? 'text-gray-900  dark:text-gray-50'
              : 'text-gray-300 dark:text-gray-600'
          } absolute top-3.5 left-3 z-10 stroke-current`}
        />
        <input
          onFocus={(e) => setSearching(true)}
          onChange={(e) => changeInput(e)}
          onBlur={(e) => setSearching(false)}
          type="text"
          className={`border border-gray-200 py-2 pl-9 pr-4 text-sm placeholder-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-600 ${
            searching
              ? 'w-3/4 rounded-t-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'
              : 'w-3/4 rounded-md sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5'
          } focus:outline-none focus:border-4 focus:border-gray-300 dark:focus:border-gray-300`}
          placeholder="Search posts..."
        />
        <div
          className={`${
            searching ? 'block' : 'hidden'
          }  h-56 w-3/4 overflow-y-scroll rounded-b-lg border-r border-b border-l  border-gray-300 bg-gray-50 shadow-lg dark:border-gray-300 dark:bg-gray-900 sm:w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/4`}
        >
          <div className="flex h-full w-full flex-col">
            {searchQuery && searchList ? (
              <div className="h-full w-full">
                {!searchList.length ? (
                  <div className="flex h-full w-full flex-row items-center justify-center justify-items-center text-gray-300 ">
                    <div className="pr-2">
                      <SvgtoReact
                        name="search"
                        class={
                          'stroke-current text-gray-600 dark:text-gray-300'
                        }
                        height={13}
                        width={13}
                      />
                    </div>
                    <p className="border-l border-gray-200 pl-2 text-gray-600 dark:border-gray-600 dark:text-gray-300">
                      No results found
                    </p>
                  </div>
                ) : (
                  searchList.map((node) => (
                    <div
                      key={node.node.title}
                      className="text cursor-pointer  border-b p-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                      onMouseDown={(e) => router.push(`/${node.node.slug}`)}
                    >
                      <Link href={`/${node.node.slug}`}>
                        <a className="text-lg text-gray-700 dark:text-gray-50">
                          {node.node.title}
                        </a>
                      </Link>
                      <p
                        title={node.node.excerpt}
                        className="truncate text-gray-500  dark:text-gray-300"
                      >
                        {node.node.excerpt}
                      </p>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="my-auto mx-auto flex items-center dark:text-gray-100">
                <>
                  <div className="pr-2">
                    <SvgtoReact
                      name="search"
                      class={'stroke-current text-gray-600 dark:text-gray-300'}
                      height={13}
                      width={13}
                    />
                  </div>
                  <p className="border-l border-gray-200 pl-2 text-gray-600 dark:border-gray-600 dark:text-gray-300">
                    Search for posts
                  </p>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
