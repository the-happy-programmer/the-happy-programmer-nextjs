'use client'
import { useState } from 'react'
import type { TitleSub } from '../../lib/types/general'
import SvgtoReact from '../Svgtoreact'
import classNames from 'classnames'

export default function DropDown({ title, subtitle }: TitleSub) {
  const [open, setOpen] = useState<boolean>(false)
  const style = classNames(
    'transform self-center fill-current text-stone-700 dark:text-stone-100',
    { '-rotate-180': open, 'rotate-0': !open }
  )
  return (
    <div className="w-full p-3">
      <div
        className="mx-auto flex max-w-md cursor-pointer flex-row justify-between"
        onClick={(e) => (open ? setOpen(false) : setOpen(true))}
      >
        <p className="cursor-pointer py-3 text-default-900 dark:text-stone-50">
          {title}
        </p>
        <SvgtoReact name="arrow" height={15} className={style} />
      </div>
      {open ? (
        <p className="mx-auto max-w-md py-5 font-light text-stone-800 dark:text-stone-100">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
