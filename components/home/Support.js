import { useState } from 'react';
import SvgtoReact from '../Svgtoreact';

export default function Support() {
  const [currentsupport, setcurrentsupport] = useState(0);
  const prices = ['£2,5', '£4', '£8'];
  const benefits = [
    ['Early access', 'Patron-only updates', 'Chat community'],
    ['Early access', 'Patron-only updates', 'Chat community', 'Chat community'],
    [
      'Early access',
      'Patron-only updates',
      'Chat community',
      'Chat community',
      'Chat community',
    ],
  ];
  return (
    <div className='border-b dark:border-gray-700 text-gray-900 dark:text-gray-300'>
      <div className='container px-4 py-10'>
        <div className='text-center'>
          <p className='text-3xl font-bold dark:text-gray-50'>Support</p>
          <p className='py-5'>
            Please consider supporting this website monthly.
          </p>
        </div>
        <div className=''>
          <p>Choose Your Plan</p>
          <div className='flex justify-center gap-x-20'>
            <div className='rounded-lg border-gray-700 flex flex-col gap-y-10'>
              {prices.map((price, index) => (
                <div
                  className={`${
                    index === currentsupport &&
                    'dark:bg-gray-50 bg-gray-900 dark:text-gray-900 text-gray-50'
                  } rounded-md border px-6 py-2 dark:border-gray-700`}
                  key={price}
                  onClick={(e) => setcurrentsupport(index)}
                >
                  <div className='flex flex-row gap-x-20 items-center'>
                    <div>
                      <p className='text-xl pb-1'>{price}</p>
                      <p>per month (+VAT)</p>
                    </div>
                    <SvgtoReact
                      name='tick'
                      className='fill-current text-gray-50'
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className=' border rounded-lg border-gray-200 dark:border-gray-700 flex flex-col justify-center px-5'>
              {benefits[currentsupport].map((e) => (
                <div className='flex flex-row gap-x-5 m-5'>
                  <SvgtoReact name='tick' />
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
