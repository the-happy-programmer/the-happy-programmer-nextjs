import CoursesCard from '../components/courses/CoursesCard'
import SearchCourses from '../components/courses/SearchCourses'

export default function ({ courses, header }) {
  return (
    <div className="bg-gray-100 pt-10">
      <div className="container">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-semibold dark:text-gray-50">
            {header.title}
          </h1>
          <h2 className="pt-2  pb-5 text-gray-600">{header.subtitle}</h2>
          <div className="bg-gray-100 py-1 px-7">
            <SearchCourses courses={courses} />
          </div>
        </div>
        <div className="grid">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const header = { title: 'Courses', subtitle: 'Be an expert in programming' }
  const courses = [
    {
      tags: ['Markdown', 'NuxJS 2.0', 'tailwind'],
      title: 'Markdown NuxtJS Website',
      description:
        'learn how to create a markdown blog usung tailwind and nuxtJS',
      image: '',
      author: '',
      experty: '',
    },
    {
      tags: ['Markdown', 'NuxJS 2.0', 'tailwind'],
      title: 'Markdown NuxtJS Website',
      description:
        'learn how to create a markdown blog usung tailwind and nuxtJS',
      image: '',
      author: '',
      experty: '',
    },
    {
      tags: ['Markdown', 'NuxJS 2.0', 'tailwind'],
      title: 'Markdown NuxtJS Website',
      description:
        'learn how to create a markdown blog usung tailwind and nuxtJS',
      image: '',
      author: '',
      experty: '',
    },
    {
      tags: ['Markdown', 'NuxJS 2.0', 'tailwind'],
      title: 'Markdown NuxtJS Website',
      description:
        'learn how to create a markdown blog usung tailwind and nuxtJS',
      image: '',
      author: '',
      experty: '',
    },
  ]
  return { props: { courses, header } }
}
