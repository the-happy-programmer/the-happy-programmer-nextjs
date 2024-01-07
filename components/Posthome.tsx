import { Link } from '@nextui-org/link';
import type { PostProps } from '@/lib/types/blog';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
const TagSitter = ({ tag }: { tag: string[] }) => {
  return tag.map((tag) => (
    <Link href={`/tag/${tag}`} key={tag}>
      <Chip color="default" size="sm" variant="flat">
        {tag}
      </Chip>
    </Link>
  ));
};

export default function Posthome({
  post,
  plain,
}: {
  post: PostProps;
  plain: boolean;
}): JSX.Element {
  const { title, pubDate, author, tags, description } = post.meta;
  return (
    <>
      <div className="flex flex-col py-unit-xl">
        {plain ? (
          <div className="flex flex-row items-center gap-x-unit-sm pb-unit-sm">
            <TagSitter tag={tags} />
          </div>
        ) : null}
        <Link
          color="foreground"
          href={`/${post.link}`}
          underline="hover"
          size="lg"
          className="mr-auto flex w-auto flex-row font-semibold"
        >
          {title}
        </Link>
        <p className="leading-loose text-default-600">{description}</p>
        <div className="pt-unit-sm">
          {plain ? (
            <Link
              href={`/author/${author.toLowerCase()}`}
              underline="hover"
              color="foreground"
              className="capitalize"
            >
              {author}
            </Link>
          ) : null}
          <p className="text-default-500">{pubDate}</p>
        </div>
      </div>
      <Divider />
    </>
  );
}
