import HappyLink from './HappyLink'

export default function Support(): JSX.Element {
  return (
    <div className="border-t border-stone-200 bg-stone-50 py-8 dark:border-stone-700 dark:bg-default-900">
      <div className="container px-3">
        <div className="px-1">
          <p className="text-default-900 dark:text-stone-50">
            Consider supporting me on{' '}
            <HappyLink
              classes="text-accent dark:text-darkaccent hover:underline"
              href="https://www.patreon.com/thehappyprogrammer"
            >
              Patreon
            </HappyLink>
          </p>
          <p className="text-stone-700 dark:text-stone-300">
            It is very important for me to support The Happy Programmer so I
            continue providing high quality content.
          </p>
        </div>
      </div>
    </div>
  )
}
