import SvgtoReact from "./Svgtoreact"
import HappyButton from "./Happybutton"
import HappyLink from "./HappyLink"

const Nav = () => {
  const sublinks = [
    ["/category/swiftui", "SwiftUI"],
    ["/category/flutter", "Flutter"],
    ["/category/reactnative", "React Native"],
  ]

  const links = [
    ["/", "Blog"],
    ["/about", "About"],
  ]
  return (
    <div className='border-b dark:border-gray-600'>
      <nav className='text-gray-500 dark:text-gray-300'>
        <div className='border-b dark:border-gray-600'>
          <div className='container p-3 sm:p-4 flex items-center justify-between mx-auto'>
            <SvgtoReact
              name='logo'
              className='justify-self-auto stroke-current fill-current text-gray-900 dark:text-gray-50'
              height={40}
            />
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
              {sublinks.map(([link, name]) => (
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
