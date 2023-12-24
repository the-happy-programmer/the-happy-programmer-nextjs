import { useState } from 'react'
import SvgtoReact from '../Svgtoreact'
import type { SupportType } from '../../lib/types/home'

export default function Support({
  title,
  subtitle,
  prices,
  benefits,
}: SupportType) {
  const [currentsupport, setcurrentsupport] = useState<number>(0)

  return (
    <div className="border-b text-default-900 dark:border-stone-700 dark:text-stone-300">
      <div className="container px-4 py-10">
        <div className="text-center">
          <p className="text-3xl font-bold dark:text-stone-50">{title}</p>
          <p className="py-5 pb-10">{subtitle}</p>
        </div>
        <div className="min-w-min">
          <div className="flex flex-col-reverse justify-center gap-y-10 sm:flex-col md:flex-row md:gap-x-16 lg:flex-row lg:gap-x-16 xl:flex-row xl:gap-x-16">
            <div className="flex flex-col gap-y-10 rounded-lg border-stone-700">
              {prices.map((price, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg border px-6 py-2 ${
                    index === currentsupport
                      ? 'bg-default-900 text-stone-50 hover:bg-stone-700 dark:bg-stone-50 dark:text-default-900 dark:hover:bg-stone-200'
                      : 'bg-stone-50 hover:bg-stone-100 dark:border-stone-700 dark:bg-default-900 dark:text-stone-100 dark:hover:bg-stone-800'
                  }`}
                  onClick={(e) => setcurrentsupport(index)}
                >
                  <div className="flex flex-row items-center gap-x-20">
                    <div>
                      <p className="pb-1 text-xl">{price}</p>
                      <p
                        className={`text-sm ${
                          index === currentsupport
                            ? 'text-stone-400 dark:text-stone-500'
                            : 'text-stone-500 dark:text-stone-400'
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
                          ? 'fill-current text-stone-50 dark:text-stone-700'
                          : 'fill-current text-stone-700 dark:text-stone-50'
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-col rounded-lg border border-stone-200 px-5 dark:border-stone-700">
              {benefits[currentsupport].map((e) => (
                <div key={e} className="m-5 flex flex-row gap-x-5">
                  <SvgtoReact
                    className="fill-current text-stone-700 dark:text-stone-200"
                    name="tick"
                    height={26}
                  />
                  <p className="text-stone-700 dark:text-stone-50">{e}</p>
                </div>
              ))}
              <a
                href="https://www.patreon.com/thehappyprogrammer"
                target="_blank"
                rel="noreferrer"
                className="-mx-5 mt-auto rounded-b-lg bg-default-900 py-4 text-center font-semibold text-stone-50 hover:bg-stone-700 dark:bg-stone-50 dark:text-default-900 hover:dark:bg-stone-200 dark:hover:bg-stone-200"
              >
                {title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
