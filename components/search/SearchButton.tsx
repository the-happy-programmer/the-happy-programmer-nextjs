'use client'
import { useEffect, useState } from 'react'
import scroll from '@/lib/scroll'
import { PostProps } from '@/lib/types/blog'
import Search from './Search'

const SearchButton = ({ posts }: { posts: PostProps[] }) => {
  const [searching, setSearching] = useState<boolean>(false)

  useEffect(() => {
    function handleKeyDown(e: { key: string }) {
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

  const openSearch = () => {
    scroll('hidden')
    setSearching(true)
  }
  return (
    <>
      <button
        className="focus:outline-none rounded-md border border-gray-900  py-2 pl-10 pr-6 text-sm text-gray-900  focus:border-gray-700 group-hover:border-gray-600  dark:border-gray-500 dark:bg-gray-900 dark:text-gray-500 dark:group-hover:border-gray-50 "
        onClick={() => openSearch()}
      >
        Search posts...
      </button>
      {searching && <Search posts={posts} setSearching={setSearching} />}
    </>
  )
}

export default SearchButton
