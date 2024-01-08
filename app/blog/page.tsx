import Headerlayout from '@/widget/Headerlayout';
import MyHeader from '@/components/search/MyHeader';
import PostList from '@/components/PostList';
import { Metadata } from 'next';
import { getAllDocs } from '@/lib/courseslib/courseapi';
import { uniqueArrayItems } from '@/lib/uniqueArrayItems';
import type { PostProps } from '@/lib/types/blog';

export const metadata: Metadata = {
  title: 'The Happy Programmer | Blog',
  description:
    'The Happy Programmer is a programming website focused on teaching programming technologies like iOS, Flutter and more. Courses in mobile development daily iOS and Flutter blog posts.',
};

const banner: string[][] = [
  [
    'Support Ukrainian children and families through the tough times they are going through',
    'UNICEF Donate',
    'https://www.unicef.org.uk/donate/donate-now-to-protect-children-in-ukraine/?gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X0lPlYwu0E2vfVCEX3x6N4B_IkPi5SvQLlLF65pZgNEnWBTIbX_27caArikEALw_wcB',
  ],
];

const posts: PostProps[] = getAllDocs('course/blog').map((post: PostProps) => ({
  link: post.link,
  meta: post.meta,
}));
const { categories, tags }: { categories: string[]; tags: string[] } =
  uniqueArrayItems();

export default async function Blog({}) {
  return (
    <>
      <Headerlayout>
        <MyHeader
          subtitle="Be an expert in programming"
          title="The Happy Programmer"
          posts={posts}
        />
      </Headerlayout>
      <PostList
        posts={posts}
        tags={tags}
        categories={categories}
        banner={banner}
      />
    </>
  );
}
