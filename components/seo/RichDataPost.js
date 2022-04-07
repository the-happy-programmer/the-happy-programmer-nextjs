import Head from 'next/head'
import Script from 'next/script'
// tobe done

export default function Meta({ title, description, firstName, date, image }) {
  return (
    <head>
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
              "name": "${firstName}"
            }
        }
    `,
        }}
      />
    </head>
  )
}
