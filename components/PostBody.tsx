import styles from "../styles/post.module.css";
import { CustomMDX } from "./Mdx-remote";

export default function Postbody({
  content,
}: {
  content: string;
}): JSX.Element {
  return (
    <div className="border-b border-t border-stone-200 bg-stone-100 dark:border-stone-700  dark:bg-stone-800">
      <div className="prose mx-auto dark:prose-invert">
        <CustomMDX source={content} />
      </div>
    </div>
  );
}
