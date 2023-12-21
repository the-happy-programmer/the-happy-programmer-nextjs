import React from 'react'

const Seperator = () => {
  return (
    <div className="mb-4 flex items-center">
      <div className="mr-3 flex-grow border-t border-stone-200 dark:border-stone-700"></div>
      <span className="text-stone-400">OR</span>
      <div className="ml-3 flex-grow border-t border-stone-200 dark:border-stone-700"></div>
    </div>
  )
}

export default Seperator
