import SvgtoReact from '../Svgtoreact'

const UkrainianBanner = ({ setsupp, svgname, title, subtitle, link }) => {
  return (
    <div className="spac flex w-full flex-row justify-between px-3 py-4">
      <SvgtoReact name="ukrainianflag" height={50} width={50} />
      <div className="mr-auto pl-6">
        <p className="font-semibold text-gray-700 dark:text-gray-100">
          {title}
        </p>
        <p className="text-gray-600 dark:text-gray-300 ">
          {subtitle}{' '}
          <a
            className="text-accent hover:underline dark:text-darkaccent"
            href="https://www.unicef.org.uk/donate/donate-now-to-protect-children-in-ukraine/?gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X0lPlYwu0E2vfVCEX3x6N4B_IkPi5SvQLlLF65pZgNEnWBTIbX_27caArikEALw_wcB"
          >
            {link}
          </a>
        </p>
      </div>
      <button
        onClick={(e) => {
          setsupp(false)
        }}
        name={svgname}
        className=" self-center fill-current text-accent hover:underline dark:text-darkaccent"
      >
        OK
      </button>
    </div>
  )
}

export default UkrainianBanner
