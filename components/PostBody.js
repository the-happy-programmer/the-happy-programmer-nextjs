import styles from '../styles/post.module.css'
export default function Postbody({ content }) {
  return (
    <div className='bg-gray-100 border-t border-b border-gray-200 dark:border-gray-600  dark:bg-gray-800'>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
