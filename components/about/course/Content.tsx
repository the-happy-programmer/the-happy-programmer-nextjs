import { CustomMDX } from "@/components/Mdx-remote";

export default function Content({ content }: { content: string }): JSX.Element {
  return (
    <div className="prose flex-col dark:prose-invert">
      <CustomMDX source={content} />
    </div>
  );
}
