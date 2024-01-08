import Headerlayout from '@/widget/Headerlayout';
import MyHeader from '@/components/search/MyHeader';
import PostList from '@/components/PostList';
import { getAllDocs } from '@/lib/courseslib/courseapi';
import { getAllAuthors } from '@/lib/getAllAuthors';
import { uniqueArrayItems } from '@/lib/uniqueArrayItems';
import type { PostProps } from '@/lib/types/blog';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = `${params.slug} - The Happy Programmer`;
  const description = `${params.slug} Author - every post which is related to ${params.slug}`;
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
  const authors = getAllAuthors();
  console.log(authors);
  return authors.map((auth) => ({ slug: auth }));
}

export default function Author({ params }: Props): JSX.Element {
  const allDocs = getAllDocs('course/blog');
  const { categories, tags } = uniqueArrayItems();
  const posts: PostProps[] = allDocs
    .map((a: PostProps) => ({ link: a.link, meta: a.meta }))
    .filter((a: PostProps) => a.meta.author.toLowerCase() === params.slug);
  return (
    <>
      <Headerlayout>
        <MyHeader
          subtitle="The Happy Programmer"
          title={posts[0].meta.author}
          posts={posts}
        />
      </Headerlayout>
      <PostList posts={posts} tags={tags} categories={categories} />
    </>
  );
}
