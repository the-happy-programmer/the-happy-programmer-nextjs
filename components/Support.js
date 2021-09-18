import HappyButton from "./Happybutton"
import SvgtoReact from "./Svgtoreact"

export default function Support() {
  return (
    <div className='bg-gray-50 border-t border-gray-600 py-8 dark:bg-gray-900'>
      <div className='container px-3 '>
        <SvgtoReact
          name='patreonlogo'
          className='fill-current text-gray-700 dark:text-gray-50'
          height={35}
        />
        <div className='pt-6 pb-8'>
          <p className='text-xl dark:text-gray-50 text-gray-900'>
            Consider supporting me on Patreon
          </p>
          <p className='dark:text-gray-300 text-gray-700'>
            It is very important for me to support The Happy Programmer so I
            continue providing high quality content.
          </p>
        </div>
        <HappyButton>SUPPORT ME</HappyButton>
      </div>
    </div>
  )
}
