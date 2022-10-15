import Image from 'next/image'
import SvgtoReact from '../Svgtoreact'
export default function SupCustomer(): JSX.Element {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-sm rounded-2xl border border-gray-900 border-opacity-10 bg-gray-100 p-10 text-center text-gray-700 dark:border-gray-50 dark:bg-gray-800 dark:text-gray-100">
        <SvgtoReact
          name="support/quote"
          className="mx-auto mb-3 fill-current text-blue-900 text-opacity-30"
          height={40}
        />
        <p className="font-semibold italic">
          " I liked how simple everything was explained. easy to follow and to
          remember "
        </p>
        <div className="fle-row flex justify-center gap-x-2 pt-5">
          {[...Array(5)].map((e) => (
            <SvgtoReact key={e} name="support/star" height={18} />
          ))}
        </div>
      </div>
      <div className="center flex flex-row justify-center pt-10 ">
        {[...Array(4)].map((_, index) => (
          <div className="relative -mr-3 h-10 w-10 rounded-full border-2 border-gray-200 dark:border-gray-50">
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="author picture"
              src={`/images/user${index + 1}.png`}
            />
          </div>
        ))}
        <p className="my-auto ml-6 text-gray-900 text-opacity-50 dark:text-gray-50">
          {' '}
          + 10 users...
        </p>
      </div>
    </div>
  )
}
