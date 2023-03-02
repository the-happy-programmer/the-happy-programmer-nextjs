import styles from '../../styles/course.module.css'

export default function Content({ content }: { content: string }): JSX.Element {
  return (
    <div className="flex-col">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
