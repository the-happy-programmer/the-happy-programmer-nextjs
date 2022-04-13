import SvgtoReact from '../Svgtoreact'

const Banner = ({ setsupp, svgname, title, subtitle, link, httpLink, svg }) => {
  return (
    <div className="spac flex w-full flex-row justify-between px-3 py-4">
      <SvgtoReact name={svg} height={50} width={50} />
      <div className="mr-auto pl-6">
        <p className="font-semibold text-gray-700 dark:text-gray-100">
          {title}
        </p>
        <p className="text-gray-600 dark:text-gray-300 ">
          {subtitle}{' '}
          <a
            className="text-accent hover:underline dark:text-darkaccent"
            href={httpLink}
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

export default Banner
