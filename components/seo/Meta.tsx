import Head from 'next/head'
import type { SEOProps } from '../../lib/types/seo'
export default function Meta({
  title,
  description,
  children,
}: SEOProps): JSX.Element {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="follow, index" />

      {/* more meta data */}
      {children}
    </Head>
  )
}
