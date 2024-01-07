import SvgtoReact from '@/components/Svgtoreact';
import { useState } from 'react';
import type { PostProps } from '@/lib/types/blog';
export default function Search({
  posts,
  setSearching,
}: {
  posts: PostProps[];
  setSearching: Function;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState<PostProps[]>([]);
  const filterItems = (arr: PostProps[], query: any) => {
    return arr.filter(
      (el) =>
        el.meta.description?.toLowerCase().includes(query) ||
        el.meta.title?.toLowerCase().includes(query)
    );
  };

  const icontitle = (tag: string[]) =>
    tag.map((tag) => (
      <div key={tag}>
        <SvgtoReact height={20} width={20} name={tag.toLowerCase()} />
      </div>
    ));

  return (
    <div
      tabIndex={0}
      className="fixed bottom-0 left-0 right-0 top-0
     z-50 h-screen w-screen bg-stone-200 bg-opacity-95 dark:bg-stone-800"
    ></div>
  );
}
