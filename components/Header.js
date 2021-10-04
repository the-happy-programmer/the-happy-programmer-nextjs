import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import SvgtoReact from "./Svgtoreact"
// Header
export default function Header({ title, posts }) {
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchList, setSearchList] = useState([])

  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      return (
        el.node.excerpt.toLowerCase().includes(query) ||
        el.node.title.toLowerCase().includes(query)
      )
    })
  }

  const changeInput = (e) => {
    if (e.target.value === "") {
      setSearchList([])
      setSearchQuery(e.target.value)
      return
    }
    setSearchQuery(e.target.value.toLowerCase())
    setSearchList(filterItems(posts, e.target.value.toLowerCase()))
    return
  }

  return (
    <div className='container px-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-20'>
      <h1 className='text-gray-500 dark:text-gray-300 '>
        The Happy Programmer
      </h1>
      <h2 className='text-4xl mt-1 dark:text-gray-50 capitalize'>{title}</h2>
      <div className='relative mt-10' onFocus={(e) => setSearching(true)}>
        <SvgtoReact
          height='12'
          width='12'
          name='search'
          className={`${
            searching
              ? "text-gray-900  dark:text-gray-50"
              : "text-gray-300 dark:text-gray-600"
          } stroke-current z-10 absolute top-3.5 left-3`}
        />
        <input
          onChange={(e) => changeInput(e)}
          onBlur={(e) => setSearching(false)}
          type='text'
          className={`py-2 pl-9 pr-4 border-gray-200 dark:border-gray-600 dark:placeholder-gray-600 placeholder-gray-300 text-sm border dark:bg-gray-900  ${
            searching
              ? "rounded-t-lg w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              : "rounded-md w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5"
          }  ds-input dark:text-gray-50
        focus:border-gray-300  dark:focus:border-gray-300 focus:border-4 focus:outline-none`}
          placeholder='Search posts...'
        />
        <div
          className={`${
            searching ? "block" : "hidden"
          }  w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-56 dark:bg-gray-900  border-r border-b border-l border-gray-300 dark:border-gray-300 bg-gray-50  shadow-lg overflow-y-scroll rounded-b-lg`}
        >
          <div className='flex flex-col h-full w-full'>
            {searchQuery && searchList ? (
              <div className='h-full w-full'>
                {!searchList.length ? (
                  <div className='text-gray-300 flex flex-row items-center justify-items-center h-full w-full justify-center '>
                    <div className='pr-2'>
                      <SvgtoReact
                        name='search'
                        class={
                          "stroke-current text-gray-600 dark:text-gray-300"
                        }
                        height={13}
                        width={13}
                      />
                    </div>
                    <p className='pl-2 border-l dark:text-gray-300 text-gray-600 dark:border-gray-300 border-gray-300'>
                      No results found
                    </p>
                  </div>
                ) : (
                  searchList.map((node) => (
                    <div
                      key={node.node.title}
                      className='cursor-pointer p-3  text border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
                      onMouseDown={(e) => router.push(`/${node.node.slug}`)}
                    >
                      <Link href={`/${node.node.slug}`}>
                        <a className='dark:text-gray-50 text-lg text-gray-700'>
                          {node.node.title}
                        </a>
                      </Link>
                      <p
                        title={node.node.excerpt}
                        className='text-gray-500 truncate  dark:text-gray-300'
                      >
                        {node.node.excerpt}
                      </p>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className='dark:text-gray-100 flex items-center my-auto mx-auto'>
                <>
                  <div className='pr-2'>
                    <SvgtoReact
                      name='search'
                      class={"stroke-current dark:text-gray-300 text-gray-600"}
                      height={13}
                      width={13}
                    />
                  </div>
                  <p className='pl-2 border-l text-gray-600 border-gray-200 dark:text-gray-300 dark:border-gray-600'>
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
