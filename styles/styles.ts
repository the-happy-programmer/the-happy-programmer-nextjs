import classname from 'classnames'
export const button = (xl: boolean): string =>
  classname(
    'focus:outline-none inline-block cursor-pointer rounded-md border-gray-900 bg-gray-900  font-medium leading-6 text-gray-50 shadow-lg hover:border-opacity-10 dark:border-gray-50 dark:bg-gray-50 dark:text-gray-900 capitalize tracking-wide hover:bg-opacity-80',
    { 'text-base py-2 px-6 border-2': xl },
    { 'text-xs py-2 px-4 border': !xl }
  )

export const titlestyle = classname(
  'mt-1 text-4xl font-semibold capitalize dark:text-gray-50'
)

export const subtitlestyle = (upercase: boolean, lg?: boolean) =>
  classname(
    'text-xs text-gray-900 opacity-60 dark:text-gray-50',
    { uppercase: upercase },
    { 'py-2 text-base': !upercase },
    { 'text-sm': lg },
    { 'font-semibold': !lg }
  )
