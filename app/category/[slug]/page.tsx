import MyHeader from "@/components/search/MyHeader";
import PostList from "@/components/PostList";
import Headerlayout from "@/widget/Headerlayout";
import { uniqueArrayItems } from "@/lib/uniqueArrayItems";
import { getAllDocs } from "@/lib/courseslib/courseapi";
import { Metadata, ResolvingMetadata } from "next";
import type { PostProps } from "@/lib/types/blog";

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = `${params.slug} - The Happy Programmer`;
  const description = `${params.slug} Category - every post which is related to ${params.slug}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export async function generateStaticParams() {
  const { categories } = uniqueArrayItems();
  return categories;
}

export default function Category({ params }: Props): JSX.Element {
  const { slug } = params;
  const allDocs = getAllDocs("course/blog");
  const { categories, tags } = uniqueArrayItems();

  const posts: PostProps[] = allDocs
    .map((a: PostProps) => ({ link: a.link, meta: a.meta }))
    .filter((a: PostProps) => a.meta.categories.map((e) => e === slug));

  return (
    <div>
      <Headerlayout>
        <MyHeader subtitle="The Happy Programmer" title={slug} posts={posts} />
      </Headerlayout>
      <PostList posts={posts} tags={tags} categories={categories} />
    </div>
  );
}
