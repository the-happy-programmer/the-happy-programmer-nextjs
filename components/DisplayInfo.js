export default function DisplayInfo({ title, subtitle, children }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 pb-5'>
      <p className='container text-gray-800 dark:text-gray-50 px-3 py-6 text-2xl'>
        Experience.{" "}
        <span className='dark:text-gray-400 text-gray-500'>
          You can see my projects on GitHub
        </span>
      </p>
      <div className='grid grid-cols-4 px-2 gap-5 container'>
        {projects.map(([svg, desc, link]) => (
          <div
            key={svg}
            className='flex flex-col bg-gray-50 dark:bg-gray-900 p-5 border dark:border-gray-600 rounded-xl'
          >
            <div className='py-5'>
              <SvgtoReact
                className='fill-current dark:text-gray-50'
                name={svg.toLowerCase()}
                height={45}
              />
            </div>
            <p className='text-2xl dark:text-gray-50'>{svg}</p>
            <p className='leading-loose text-gray-600 dark:text-gray-300 py-2'>
              {desc}
            </p>
            <HappyLink
              classes='dark:text-gray-50 font-bold justify-between mt-auto flex items-center'
              href={link}
            >
              Projects{" "}
              <SvgtoReact
                name='arrow'
                className='transform fill-current -rotate-90 dark:text-gray-50'
                height={15}
              />
            </HappyLink>
          </div>
        ))}
      </div>
    </div>
  )
}
