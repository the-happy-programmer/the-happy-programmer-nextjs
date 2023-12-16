import Meta from '../../seo/Meta'
import SvgToReact from '../../Svgtoreact'
import SubInput from '../../home/SubInput'
import type { CoursesHeader } from '../../../lib/types/courses'

export default function CourseHeader({
  meta,
}: {
  meta: CoursesHeader
}): JSX.Element {
  return (
    <>
      <Meta title={meta.title} description={meta.description} />
      <div className="container flex flex-col items-center space-y-2 py-12">
        <SvgToReact name={meta.icon} height={55} width={55} />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {meta.coursetitle}
        </p>
        <h1 className="pb-3 text-3xl dark:text-gray-400">{meta.title}</h1>
        <SubInput />
      </div>
    </>
  )
}
