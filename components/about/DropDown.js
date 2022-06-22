import { useState } from 'react'
import SvgtoReact from '../Svgtoreact'

export default function DropDown({ title, subtitle }) {
  const [open, setOpen] = useState()
  return (
    <div className="w-full p-3">
      <div
        className="flex cursor-pointer flex-row justify-between"
        onClick={(e) => (open ? setOpen(false) : setOpen(true))}
      >
        <p className="cursor-pointer py-3 text-lg font-bold text-gray-900 dark:text-gray-50">
          {title}
        </p>
        <SvgtoReact
          name="arrow"
          height={15}
          className={`${
            open ? '-rotate-180' : 'rotate-0'
          } transform self-center fill-current text-gray-700 dark:text-gray-100`}
        />
      </div>
      {open ? (
        <p className="py-5 text-gray-600 dark:text-gray-300">{subtitle}</p>
      ) : null}
    </div>
  )
}
