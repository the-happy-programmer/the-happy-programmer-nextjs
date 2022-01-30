import { useState } from 'react';
import SvgtoReact from '../Svgtoreact';

export default function Support({ title, subtitle, prices, benefits }) {
  const [currentsupport, setcurrentsupport] = useState(0);

  return (
    <div className='border-b dark:border-gray-700 text-gray-900 dark:text-gray-300'>
      <div className='container px-4 py-10'>
        <div className='text-center'>
          <p className='text-3xl font-bold dark:text-gray-50'>{title}</p>
          <p className='py-5 pb-10'>{subtitle}</p>
        </div>
        <div className='min-w-min'>
          <div className='flex flex-col-reverse justify-center gap-y-10 md:gap-x-16 lg:gap-x-16 xl:gap-x-16 sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
            <div className='rounded-lg border-gray-700 flex flex-col gap-y-10'>
              {prices.map((price, index) => (
                <div
                  key={index}
                  className={` cursor-pointer rounded-md border px-6 py-2  ${
                    index === currentsupport
                      ? 'dark:bg-gray-50 bg-gray-900 dark:text-gray-900 text-gray-50 hover:bg-gray-700 dark:hover:bg-gray-200'
                      : 'dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={(e) => setcurrentsupport(index)}
                >
                  <div className='flex flex-row gap-x-20 items-center'>
                    <div>
                      <p className='text-xl pb-1'>{price}</p>
                      <p className='text-gray-500 dark:text-gray-400 text-sm'>
                        per month (+VAT)
                      </p>
                    </div>
                    <SvgtoReact
                      height={26}
                      name='tick'
                      className={
                        index === currentsupport
                          ? 'fill-current text-gray-50 dark:text-gray-700'
                          : 'fill-current dark:text-gray-50 text-gray-700'
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className=' border rounded-lg border-gray-200 dark:border-gray-700 flex flex-col px-5'>
              {benefits[currentsupport].map((e) => (
                <div key={e} className='flex flex-row gap-x-5 m-5'>
                  <SvgtoReact
                    className='fill-current text-gray-700 dark:text-gray-200'
                    name='tick'
                    height={26}
                  />
                  <p className='text-gray-700 dark:text-gray-50'>{e}</p>
                </div>
              ))}
              <a
                href='https://www.patreon.com/thehappyprogrammer'
                target='_blank'
                rel='noreferrer'
                className='dark:text-gray-900 text-gray-50 dark:bg-gray-50 bg-gray-900 -mx-5 mt-auto py-4 rounded-b-lg text-center hover:dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-200'
              >
                SUPPORT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
