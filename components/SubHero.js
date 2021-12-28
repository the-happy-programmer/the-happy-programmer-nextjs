import SvgtoReact from './Svgtoreact'

export default function SubHero({ subhero }) {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='border-t border-b flex flex-row border-gray-100 dark:border-gray-800'>
        {subhero.map(([icon, title, subtitle]) => (
          <div className='flex flex-col'>
            <div className='bg-gray-700 p-4 '>
              <SvgtoReact
                class='fill-current dark:text-gray-100 stroke-current'
                height={40}
                name={icon}
              />
            </div>
            <div>{title}</div>
            <div>{subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
