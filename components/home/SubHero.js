import SvgtoReact from '../Svgtoreact';

export default function SubHero({ subhero }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700'>
      <div className='container  flex gap-x-4 flex-row '>
        {subhero.map(([icon, title, subtitle]) => (
          <div className='flex flex-col items-center py-20' key={icon}>
            <div className='dark:bg-gray-700 bg-gray-200 p-4 rounded-full flex items-center justify-center w-24 h-24'>
              <SvgtoReact
                class='fill-current dark:text-gray-100 stroke-current'
                height={35}
                name={icon}
              />
            </div>
            <div className='text-3xl font-bold dark:text-gray-100 py-8'>
              {title}
            </div>
            <div className='dark:text-gray-300 text-gray-600 text-center text-lg mx-10'>
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
