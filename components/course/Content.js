import Head from 'next/head'
import styles from '../../styles/course.module.css'

export default function Content({ content }) {
  return (
    <>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}
