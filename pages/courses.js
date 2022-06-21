import CoursesCard from '../components/courses/CoursesCard'
import SearchCourses from '../components/courses/SearchCourses'

export default function Courses({ courses, header }) {
  return (
    <div className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container pt-12">
        <div className="mx-auto flex flex-col items-center py-5">
          <h1 className="text-3xl font-semibold dark:text-gray-50">
            {header.title}
          </h1>
          <h2 className="max-w-xs pt-2 pb-5 text-center text-gray-600 dark:text-gray-400">
            {header.subtitle}
          </h2>
          <div className="bg-gray-100 py-1 px-7 dark:bg-gray-800">
            <SearchCourses courses={courses} />
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-5 px-2 pt-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const header = {
    title: 'Courses',
    subtitle: 'Full programming courses on real word projects',
  }
  const courses = [
    {
      id: 1,
      link: '/courses/introduction',
      tags: ['NuxtJS', 'tailwind', 'vue'],
      title: 'Markdown NuxtJS Website',
      description:
        'learn how to create a markdown blog or Documentation like website using tailwind and nuxtJS',
      image: '',
      author: 'Tony',
      experty: 'Software Engineer',
    },
  ]
  return { props: { courses, header } }
}
