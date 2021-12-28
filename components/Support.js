import HappyLink from './HappyLink'

export default function Support() {
  return (
    <div className='bg-gray-50 border-t border-gray-200 dark:border-gray-700 py-8 dark:bg-gray-900'>
      <div className='container px-3 '>
        <div className='px-1'>
          <p className='dark:text-gray-50 text-gray-900'>
            Consider supporting me on{' '}
            <HappyLink
              classes='text-accent dark:text-darkaccent hover:underline'
              href='https://www.patreon.com/thehappyprogrammer'
            >
              Patreon
            </HappyLink>
          </p>
          <p className='dark:text-gray-300 text-gray-700'>
            It is very important for me to support The Happy Programmer so I
            continue providing high quality content.
          </p>
        </div>
      </div>
    </div>
  )
}
