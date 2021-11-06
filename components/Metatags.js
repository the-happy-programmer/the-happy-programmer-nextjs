import { Head } from "next/head"

export default function Tags({ meta }) {
  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='description' content={meta.description} />
      <meta property='og:description' content={meta.description} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='robots' content='follow, index' />
    </>
  )
}
