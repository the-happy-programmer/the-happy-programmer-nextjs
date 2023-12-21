import MyHeader from "@/components/search/MyHeader";
import PostList from "@/components/PostList";
import Headerlayout from "@/widget/Headerlayout";
import { getAllDocs } from "@/lib/courseslib/courseapi";
import { uniqueArrayItems } from "@/lib/uniqueArrayItems";
import { Metadata, ResolvingMetadata } from "next";
import { PostProps } from "@/lib/types/blog";
interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { tags } = uniqueArrayItems();
  return tags.map((tag) => ({ slug: tag }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = `${params.slug} - The Happy Programmer`;
  const description = `${params.slug} Tag - every post which is related to ${params.slug}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default function Tags({ params }: Props): JSX.Element {
  const { slug } = params;
  const allDocs = getAllDocs("course/blog");
  const { categories, tags } = uniqueArrayItems();

  const posts: PostProps[] = allDocs
    .map((a: PostProps) => ({ link: a.link, meta: a.meta }))
    .filter((a: PostProps) => a.meta.tags.map((e) => e === slug));

  return (
    <>
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={slug as string}
          posts={posts}
        />
      </Headerlayout>
      <PostList
        posts={posts}
        categories={categories}
        tags={tags}
        banner={undefined}
      />
    </>
  );
}
