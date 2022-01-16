import SvgtoReact from '../Svgtoreact';

export default function () {
  const prices = ['£2,5', '£4', '£8'];
  const benefits = ['Early access', 'Patron-only updates', 'Chat community'];
  return (
    <div className='border-b dark:border-gray-700 dark:text-gray-300'>
      <div className='container px-4 py-10'>
        <div className='text-center'>
          <p className='text-3xl font-bold dark:text-gray-50'>Support</p>
          <p className='py-5'>
            Please consider supporting this website monthly.
          </p>
        </div>
        <div className=' bg-gray-300'>
          <p>Choose Your Plan</p>
          <div className='flex justify-center'>
            <div className='w-96 bg-gray-400 border rounded-lg'>a</div>
            <div className='w-96 bg-gray-400 border rounded-lg border-gray-500'>
              b
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
