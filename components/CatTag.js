import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function CatTag({ categories, title, tags, banner }) {
  return (
    <div className="hidden pt-6 md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
      <p className="py-2 text-xs font-bold uppercase text-gray-800 dark:text-gray-100">
        {title}
      </p>
      <div className="divide-y dark:divide-gray-700">
        {tags?.map((cat) => (
          <div className="py-2.5" key={cat}>
            <Link href={`/tag/${cat}`}>
              <a className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                {cat}
              </a>
            </Link>
          </div>
        ))}
        {categories?.map((cat) => (
          <div className="py-2.5" key={cat.uri}>
            <Link href={`/category/${cat}`}>
              <a className="flex cursor-pointer flex-row  text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                <div>
                  <SvgtoReact
                    className="pr-2"
                    name={cat.toLowerCase()}
                    height={20}
                  />
                </div>

                <p className="overflow-hidden overflow-ellipsis">{cat}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {banner?.map(([subtitle, link, href]) => (
        <div key={link}>
          <p className="block pb-2 text-sm leading-normal text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
          <a
            href={href}
            className="text-sm text-accent hover:underline dark:text-darkaccent"
          >
            {link}
          </a>
        </div>
      ))}
    </div>
  )
}
