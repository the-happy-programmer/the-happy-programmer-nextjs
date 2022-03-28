import { useState } from 'react'
import SvgtoReact from '../Svgtoreact'

export default function Support({ title, subtitle, prices, benefits }) {
  const [currentsupport, setcurrentsupport] = useState(0)

  return (
    <div className="border-b text-gray-900 dark:border-gray-700 dark:text-gray-300">
      <div className="container px-4 py-10">
        <div className="text-center">
          <p className="text-3xl font-bold dark:text-gray-50">{title}</p>
          <p className="py-5 pb-10">{subtitle}</p>
        </div>
        <div className="min-w-min">
          <div className="flex flex-col-reverse justify-center gap-y-10 sm:flex-col md:flex-row md:gap-x-16 lg:flex-row lg:gap-x-16 xl:flex-row xl:gap-x-16">
            <div className="flex flex-col gap-y-10 rounded-lg border-gray-700">
              {prices.map((price, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg border px-6 py-2 ${
                    index === currentsupport
                      ? 'bg-gray-900 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200'
                      : 'bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={(e) => setcurrentsupport(index)}
                >
                  <div className="flex flex-row items-center gap-x-20">
                    <div>
                      <p className="pb-1 text-xl">{price}</p>
                      <p
                        className={`text-sm ${
                          index === currentsupport
                            ? 'text-gray-400 dark:text-gray-400'
                            : 'text-gray-500 dark:text-gray-400'
                        } `}
                      >
                        per month (+VAT)
                      </p>
                    </div>
                    <SvgtoReact
                      height={26}
                      name="tick"
                      className={
                        index === currentsupport
                          ? 'fill-current text-gray-50 dark:text-gray-700'
                          : 'fill-current text-gray-700 dark:text-gray-50'
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-col rounded-lg border border-gray-200 px-5 dark:border-gray-700">
              {benefits[currentsupport].map((e) => (
                <div key={e} className="m-5 flex flex-row gap-x-5">
                  <SvgtoReact
                    className="fill-current text-gray-700 dark:text-gray-200"
                    name="tick"
                    height={26}
                  />
                  <p className="text-gray-700 dark:text-gray-50">{e}</p>
                </div>
              ))}
              <a
                href="https://www.patreon.com/thehappyprogrammer"
                target="_blank"
                rel="noreferrer"
                className="-mx-5 mt-auto rounded-b-lg bg-gray-900 py-4 text-center text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 hover:dark:bg-gray-200 dark:hover:bg-gray-200"
              >
                SUPPORT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
