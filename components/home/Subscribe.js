import HappyButton from '../Happybutton';

export default function Subscribe({ title, subtitle }) {
  return (
    <div className='container text-center py-20'>
      <p className='text-3xl font-bold dark:text-gray-50'>{title}</p>
      <p className='p-10 text-gray-700 max-w-2xl mx-auto dark:text-gray-300'>
        {subtitle}
      </p>
      <div>
        <input
          placeholder='example@email.com'
          className='py-3 px-4  bg-gray-200 dark:bg-gray-800 dark:focus:border-gray-50 border dark:border-gray-600 focus:outline-none focus:border-gray-300 rounded-md mr-4 shadow-lg dark:text-gray-50 text-gray-900'
        />
        <HappyButton xl={true}> Subrcibe</HappyButton>
      </div>
    </div>
  );
}
