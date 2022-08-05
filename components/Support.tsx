import HappyLink from './HappyLink'

export default function Support(): JSX.Element {
  return (
    <div className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-700 dark:bg-gray-900">
      <div className="container px-3 ">
        <div className="px-1">
          <p className="text-gray-900 dark:text-gray-50">
            Consider supporting me on{' '}
            <HappyLink
              classes="text-accent dark:text-darkaccent hover:underline"
              href="https://www.patreon.com/thehappyprogrammer"
            >
              Patreon
            </HappyLink>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            It is very important for me to support The Happy Programmer so I
            continue providing high quality content.
          </p>
        </div>
      </div>
    </div>
  )
}
