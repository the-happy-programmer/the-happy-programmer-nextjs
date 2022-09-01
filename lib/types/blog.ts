import { SEOProps } from './seo'

export interface PostProps {
  link: string
  meta: PostMeta
  content?: string
  length?: number | undefined
  slice(arg0: number, arg1?: number): any
}

export interface PostMeta {
  title: string
  description: string
  heroImage: string
  tags: string[]
  categories: string[]
  pubDate: string
  author: string
  avatar: string
}

export interface BlogPageProps {
  posts: PostProps[]
  categories: string[]
  tags: string[]
  seo: SEOProps
  banner?: string[][]
}

export interface CatTagProps {
  categories?: string[]
  title: string
  tags?: string[]
  banner?: string[][]
}
