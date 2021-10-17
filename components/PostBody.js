import styles from "../styles/post.module.css"
import { renderToStaticMarkup } from "react-dom/server"
import { Parser } from "html-to-react"
export default function Postbody({ content }) {
  const e = new Parser()
  const ReactElement = e.parse(content)
  const dolores = renderToStaticMarkup(ReactElement)

  return (
    <div className='bg-gray-100 border-t border-b border-gray-200 dark:border-gray-600  dark:bg-gray-800'>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: dolores }}
      />
    </div>
  )
}
