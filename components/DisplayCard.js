import SvgtoReact from "../components/Svgtoreact"
import HappyLink from "../components/HappyLink"

export default function DisplayCard({ svg, desc, link, socials }) {
  return (
    <div
      key={svg}
      className='flex flex-col bg-gray-50 dark:bg-gray-900 p-5 border dark:border-gray-600 rounded-xl'
    >
      <div className={`pt-5 pb-2 ${socials ? "h-16" : "h-20"}`}>
        <SvgtoReact
          className='fill-current dark:text-gray-50'
          name={svg.toLowerCase()}
          height={socials ? 30 : 45}
        />
      </div>
      <p className='text-2xl capitalize dark:text-gray-50'>{svg}</p>
      <p className='leading-loose text-gray-600 dark:text-gray-300 py-2'>
        {desc}
      </p>
      <HappyLink
        classes='dark:text-gray-50 font-bold justify-between mt-auto flex items-center'
        href={link}
      >
        {socials ? "Follow" : "Projects"}{" "}
        <SvgtoReact
          name='arrow'
          className='transform fill-current -rotate-90 dark:text-gray-50'
          height={15}
        />
      </HappyLink>
    </div>
  )
}
