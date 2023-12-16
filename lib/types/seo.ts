export interface SEOProps {
  title: string
  description: string
  children?: React.ReactNode
}

export interface RichSEOProps extends SEOProps {
  firstName: string
  date: string
  image: string
  slug: string
}
