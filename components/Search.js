import Link from 'next/link'
import SvgtoReact from './Svgtoreact'
import { useState } from 'react'
export default function Search({ posts, setSearching }) {
  const [searchQuery, setSearchQuery] = useState('')
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

  const icontitle = (tag) =>
    tag.map((tag) => (
      <div className="w-12 pb-4" key={tag.slug}>
        <SvgtoReact height={40} class="" name={tag.slug.toLowerCase()} />
      </div>
    ))

  return (
    <div
      tabIndex="0"
      className="fixed top-0 bottom-0 left-0 right-0
     z-50 h-screen w-screen bg-gray-200 bg-opacity-95 dark:bg-gray-800"
    >
      <div
        className={`container mx-auto mt-10 h-2/4 w-3/4 overflow-y-auto rounded-3xl border border-gray-200 bg-gray-100 shadow-2xl dark:border-gray-700 dark:bg-gray-800`}
      >
        <div className="sticky top-0 ">
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
              className="outline-none text-grat rounder-t w-full rounded-t-3xl bg-gray-100 p-3 px-16 text-gray-900 placeholder-gray-300 dark:bg-gray-800 dark:text-gray-50"
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
        {searchQuery === '' ? (
          <div className="flex h-full items-center justify-center">
            <div className="my-auto text-gray-300 dark:text-gray-500">
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
            {searchList.map((post, index) => (
              <div key={post.node.title} className="h-full rounded-t-3xl">
                <div className="">
                  <div className="cursor-pointer border-b border-gray-200 px-7 py-6 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-col">
                        {icontitle(post.node.tags.nodes)}
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              document.body.style.overflow = 'auto'
                            }}
                          >
                            <Link href={`/${post.node.slug}`}>
                              <p className=" text-md pb-1 font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50">
                                {post.node.title}
                              </p>
                            </Link>
                          </div>
                          <p className="pr-10 dark:text-gray-300">
                            {post.node.excerpt}
                          </p>
                        </div>
                      </div>
                      <div>
                        <SvgtoReact
                          onClick={(e) => console.log('clicked')}
                          name="cancel"
                          className="cursor-pointer justify-self-end fill-current text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                          height={18}
                          width={18}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
