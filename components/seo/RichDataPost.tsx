import Head from 'next/head'
//TODO: see if you can add script tags to the head
import type { RichSEOProps } from '@/lib/types/seo'
export default function Meta({
  title,
  description,
  firstName,
  date,
  image,
  slug,
}: RichSEOProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="follow, index" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
         {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${title}",
          "image":"https://thehappyprogrammercom.wpcomstaging.com${image}",
          "datePublished": "${date}",
          "author": {
              "@type": "Person",
              "name": "${firstName}",
              "url": "https://thehappyprogrammer.com/author/${slug}/"
            }
        }
    `,
        }}
      />
    </Head>
  )
}
