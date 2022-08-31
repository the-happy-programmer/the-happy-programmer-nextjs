export interface PostProps {
  link: string
  meta: PostMeta
  content?: string
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
