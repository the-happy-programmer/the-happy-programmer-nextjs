import { MouseEventHandler } from 'react'
import Spinner from './Spinner'
import { CSSTransition } from 'react-transition-group' // ES6

export default function BtnSpinner({
  title,
  onClick,
  loading,
  full,
  disabled,
}: {
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  loading: boolean
  full?: boolean
  disabled?: boolean
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        full ? 'w-full' : 'px-5'
      } focus:outline-none flex h-12 cursor-pointer flex-row content-center justify-center rounded-md border border-gray-900 bg-gray-900 capitalize leading-6 tracking-wide hover:border-opacity-10 hover:bg-opacity-80 dark:border-gray-50 dark:bg-gray-50`}
    >
      {loading ? (
        <div className="my-auto ml-3 flex content-center">
          <Spinner />
        </div>
      ) : (
        <p className="my-auto text-xs font-medium capitalize text-gray-50 dark:text-gray-900">
          {title}
        </p>
      )}
    </button>
  )
}
