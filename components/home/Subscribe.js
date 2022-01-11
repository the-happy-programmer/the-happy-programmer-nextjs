import HappyButton from '../Happybutton';

export default function Subscribe() {
  return (
    <div className='container text-center py-20'>
      <p className='text-3xl font-bold dark:text-gray-50'>Subsribe</p>
      <p className='p-10 text-gray-700 max-w-2xl mx-auto dark:text-gray-300'>
        Subscribe to get notified for new content and course that will come in
        the near future. In any way you will not get spammed or your data being
        shared
      </p>
      <div>
        <input
          placeholder='example@email.com'
          className='py-3 px-4  bg-gray-200 dark:bg-gray-900 focus:border-gray-50 border dark:border-gray-600 focus:outline-none rounded-md mr-4 shadow-lg dark:text-gray-50 text-gray-900'
        />
        <HappyButton xl={true}> Subrcibe</HappyButton>
      </div>
    </div>
  );
}
