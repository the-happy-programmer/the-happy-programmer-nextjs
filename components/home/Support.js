import SvgtoReact from '../Svgtoreact';

export default function Support() {
  const prices = ['£2,5', '£4', '£8'];
  const benefits = ['Early access', 'Patron-only updates', 'Chat community'];
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
          <div className='flex justify-center'>
            <div className='rounded-lg border-gray-700'>
              {prices.map(price => (
              <div className='rounded-md border px-4 py-1.5 dark:border-gray-700' key={price}>
                <p className='text-xl'>{price}</p>
                <p>per month (+VAT)</p>
              </div>))}
            </div>
            <div className=' border rounded-lg border-gray-700'>b
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
