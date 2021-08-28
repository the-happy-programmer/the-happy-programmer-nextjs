export default function Postbody({ content }) {
  return (
    <div
      className='container text-gray-900 dark:text-gray-50'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
