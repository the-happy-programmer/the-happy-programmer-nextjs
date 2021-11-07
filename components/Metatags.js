import Head from "next/head"

export default function MetaTags({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />
      <meta name='robots' content='follow, index' />
    </Head>
  )
}
