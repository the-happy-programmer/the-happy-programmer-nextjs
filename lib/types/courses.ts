export interface CourseProps {
  id: number
  link: string
  tags: Tags[]
  title: string
  description: string
  image: string
  author: string
  experty: string
}

export type Tags = 'NuxtJS' | 'tailwind' | 'vue' | 'NextJS'

export interface CoursesSlugs {
  name: string
  link: string
}
