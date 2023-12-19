import styles from '../styles/post.module.css'
import { CustomMDX } from './Mdx-remote'

export default function Postbody({
  content,
}: {
  content: string
}): JSX.Element {
  return (
    <div className="border-t border-b border-gray-200 bg-gray-100 dark:border-gray-700  dark:bg-gray-800">
      <div className='prose mx-auto'>
        <CustomMDX source={content} />
      </div>
    </div>
  )
}
