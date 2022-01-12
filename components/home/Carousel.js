import SvgtoReact from '../Svgtoreact';

export default function Carousel() {
  return (
    <div>
      <SvgtoReact height={500} width={400} name='heromobile' />
      <div className='flex flex-row p-2 justify-center'>
        <div className='h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700' />
        <div className='h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700' />
        <div className='h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700' />
      </div>
    </div>
  );
}
