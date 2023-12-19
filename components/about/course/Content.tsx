
export default function Content({ content }: { content: string }): JSX.Element {
  return (
    <div className="flex-col">
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
