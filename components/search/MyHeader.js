import { useState, useEffect } from 'react'
import SvgtoReact from '../Svgtoreact'
import Search from './Search'
import scroll from '../../lib/scroll'

//
export default function MyHeader({ title, subtitle, posts }) {
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        scroll('auto')
        setSearching(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const openSearch = (e) => {
    scroll('hidden')
    setSearching(true)
  }

  return (
    <div className="container px-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-20">
      <h2 className="text-xs font-semibold uppercase text-gray-900 opacity-60 dark:text-gray-300">
        {subtitle}
      </h2>
      <h1 className="mt-1 text-4xl font-semibold capitalize dark:text-gray-50">
        {title}
      </h1>
      <div className="w- group relative float-left mt-10">
        <div className="absolute inset-y-0 left-0 ml-3.5 flex items-center">
          <SvgtoReact
            height={16}
            width={16}
            name="search"
            className="stroke-current text-gray-500 group-hover:text-gray-600 dark:text-gray-500"
          />
        </div>
        <button
          type="text"
          className="focus:outline-none rounded-md border border-gray-900 border-opacity-10 py-2 pl-10 pr-6 text-sm text-gray-900 text-opacity-30 focus:border-gray-700 group-hover:border-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500"
          onClick={(e) => openSearch(e)}
        >
          Search posts...
        </button>
        {searching && <Search posts={posts} setSearching={setSearching} />}
      </div>
    </div>
  )
}
