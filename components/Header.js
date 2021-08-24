import SvgtoReact from "./Svgtoreact"

export default function Header({ title }) {
  return (
    <div className='container px-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-20'>
      <h1 className='text-gray-500 dark:text-gray-300 '>
        The Happy Programmer
      </h1>
      <h2 className='text-4xl mt-1 dark:text-gray-50'>{title}</h2>
      <div className='relative mt-10'>
        <SvgtoReact
          height='14'
          width='14'
          name='search'
          className='z-10 absolute top-3 text-gray-300 dark:text-gray-600 focus:text-gray-900 stroke-current left-3'
        />
        <input
          type='text'
          className='py-2 pl-9 pr-4 border-gray-200 dark:border-gray-600 dark:placeholder-gray-600 placeholder-gray-300 text-sm border dark:bg-gray-900 rounded-md  ds-input dark:text-gray-50
        focus:border-gray-900 dark:focus:border-gray-50 focus:border-4 focus:outline-none'
          placeholder='Search posts...'
        ></input>
      </div>
    </div>
  )
}
