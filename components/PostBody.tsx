import styles from '../styles/post.module.css'

export default function Postbody({
  content,
}: {
  content: string
}): JSX.Element {
  return (
    <div className="border-t border-b border-gray-200 bg-gray-100 dark:border-gray-700  dark:bg-gray-800">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
