import SvgtoReact from './Svgtoreact'
import HappyButton from './Happybutton'
import HappyLink from './HappyLink'

const Nav = () => {
  const sublinks = [
    // ['/course/flutter', 'Flutter'],
    // ['/course/reactnative', 'React Native'],
  ]

  const links = [
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['https://happynuxt.vercel.app/', 'NuxtJS'],
  ]

  return (
    <div className=' dark:border-gray-700'>
      <nav className='text-gray-500 dark:text-gray-300'>
        <div className='border-b dark:border-gray-700'>
          <div className='container px-3 py-4 sm:p-4 flex items-center justify-between mx-auto'>
            <div>
              <HappyLink href='/'>
                <SvgtoReact
                  name='logo'
                  className='justify-self-center stroke-current fill-current text-gray-900 dark:text-gray-50'
                  height={30}
                />
              </HappyLink>
            </div>
            <div className='flex items-center'>
              {links.map(([link, name]) => (
                <div key={name} className='pr-5 sm:pr-6 md:pr-10'>
                  <HappyLink
                    classes='px-0 pb-5 sm:pb-6 sm:px-5 md:px-5 lg:px-5 xl:px-5  hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-50'
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
              <HappyButton
                href='https://www.patreon.com/thehappyprogrammer'
                className='box-border'
              >
                SUPPORT ME
              </HappyButton>
            </div>
          </div>
        </div>
        <div className='dark:bg-gray-800 bg-gray-100'>
          <div className='container mx-auto '>
            <div className='flex items-center'>
              {sublinks?.map(([link, name]) => (
                <div className='px-4 py-4' key={name}>
                  <HappyLink
                    classes='px-0 sm:px-4 md:px-4 lg:px-4 xl:px-4 pb-4 hover:text-gray-900 dark:hover:text-gray-50 active:text-gray-200'
                    href={link}
                  >
                    {name}
                  </HappyLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
