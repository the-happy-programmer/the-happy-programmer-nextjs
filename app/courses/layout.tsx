const links: string[] = [
  'https://www.google.com',
  'https://www.bing.com',
  'https://www.yahoo.com',
]

interface Props {
  children: React.ReactNode
}

const CoursesLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="h-scrren h-full">
        {links.map((link) => (
          <a href={link} key={link}>
            {link}
          </a>
        ))}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default CoursesLayout
