import type { SEOProps } from './seo'
export interface AboutInfo {
  info: string[][]
}
export interface AboutAuthor {
  desc: string
  job: string
  mail: string
}

export interface AboutProps {
  socials: AboutInfo['info']
  projects: AboutInfo['info']
  author: AboutAuthor
  info: AboutInfo['info']
  seo: SEOProps
}

export interface DisplayCardProps {
  svg: string
  desc: string
  link: string
  socials?: boolean
}
