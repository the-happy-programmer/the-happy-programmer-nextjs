import { useState } from "react"
import { searchqr } from "../lib/api"
import SvgtoReact from "./Svgtoreact"

export default function Header({ title }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searching, setSearching] = useState(false)

  const 

  const searchcall = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await searchqr(e.target.value)
        console.log("RES:", res)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='container px-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-20'>
      <h1 className='text-gray-500 dark:text-gray-300 '>
        The Happy Programmer
      </h1>
      <h2 className='text-4xl mt-1 dark:text-gray-50'>{title}</h2>
      <div
        className={`relative mt-10 `}
        onFocus={(e) => setSearching(true)}
        onBlur={(e) => setSearching(false)}
      >
        <SvgtoReact
          height='14'
          width='14'
          name='search'
          className={`${
            searching
              ? "stroke-current dark:text-gray-100 text-gray-800"
              : "text-gray-300 dark:text-gray-600 stroke-current"
          } z-10 absolute top-3 left-3`}
        />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onSubmit={(e) => console.log("lol")}
          onKeyDown={searchcall}
          type='text'
          className={`py-2 pl-9 pr-4 border-gray-200 dark:border-gray-600 dark:placeholder-gray-600 placeholder-gray-300 text-sm border dark:bg-gray-900  ${
            searching
              ? "rounded-t-lg w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4"
              : "rounded-md w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5"
          }  ds-input dark:text-gray-50
        focus:border-gray-900 dark:focus:border-gray-50 focus:border-4 focus:outline-none`}
          placeholder='Search posts...'
        />
        <div
          className={`${
            searching ? "block" : "hidden"
          }  w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-56 dark:bg-gray-900 focus:border-gray-900 dark:focus:border-gray-50 border-r border-b border-l overflow-y-scroll`}
        >
          <div className='flex flex-col'>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
            <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
              <SvgtoReact name='nuxtjs' height='22' width='22' />
              <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
                Learn more about NuxtJS
              </p>
            </div>
          </div>
          <div className='cursor-pointer p-4 flex flex-row border-b dark:hover:bg-gray-800'>
            <SvgtoReact name='nuxtjs' height='22' width='22' />
            <p className='pl-4 dark:text-gray-50 text-base text-gray-900'>
              Learn more about NuxtJS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
