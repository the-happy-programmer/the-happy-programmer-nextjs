import Link from 'next/link';
import SvgtoReact from '@/components/Svgtoreact';
import { useState } from 'react';
import type { PostProps } from '@/lib/types/blog';
import scroll from '@/lib/scroll';
import SearchIcon from '@/public/svg/search.svg';
import FullLogo from '@/public/svg/fulllogo.svg';
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

  const closeSearch = () => {
    scroll('auto');
    setSearching(false);
  };

  const changeInput = (e: { target: { value: string } }) => {
    if (e.target.value === '') {
      setSearchList([]);
      setSearchQuery(e.target.value);
      return;
    }
    setSearchQuery(e.target.value.toLowerCase());
    setSearchList(filterItems(posts, e.target.value.toLowerCase()));
    return;
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
    >
      <div className="container m-auto mt-10 h-2/4 w-11/12 max-w-2xl overflow-y-auto rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl dark:border-stone-700 dark:bg-stone-800 sm:mt-20 sm:w-full md:mt-32 lg:mt-32 xl:mt-32">
        <div className="sticky top-0">
          <div className="relative flex h-16 w-full border-b border-stone-200 dark:border-stone-700">
            <div className="absolute inset-y-0 left-0 ml-6 flex items-center">
              <SearchIcon
                height={20}
                width={20}
                className="stroke-current text-stone-300 dark:text-stone-200"
              />
            </div>
            <input
              type="text"
              onChange={changeInput}
              placeholder="Search posts..."
              className="rounder-t w-full rounded-t-2xl bg-stone-50 p-3 px-16 text-default-900 placeholder-stone-300 outline-none dark:bg-stone-800 dark:text-stone-50"
            />
            <div
              onClick={() => closeSearch()}
              className="absolute inset-y-0 right-0 mr-6 flex items-center bg-stone-50 dark:bg-stone-800"
            >
              <div className="cursor-pointer rounded-md border border-stone-200 fill-current p-1 text-xs text-stone-300 hover:border-stone-300 hover:text-stone-500 dark:border-stone-600 dark:text-stone-400 dark:hover:border-stone-400 dark:hover:text-stone-400">
                ESC
              </div>
            </div>
          </div>
        </div>
        <div>
          {searchList.length === 0 && searchQuery !== '' && (
            <div className="p-5">
              <div className=" text-stone-500 dark:text-stone-300">
                no results for{' '}
                <span className="text-default-900 dark:text-stone-50">
                  &quot;{searchQuery}&quot;
                </span>
                <ul className="text-accent dark:text-darkaccent py-3">
                  <li className="py-3">
                    <Link
                      href="/"
                      passHref
                      className="cursor-pointer hover:underline"
                    >
                      The Hapy Programmer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://happynuxtjs.com/"
                      passHref
                      className="cursor-pointer hover:underline"
                    >
                      Happy NuxtJS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {searchQuery === '' ? (
            <div className="flex items-center justify-center">
              <div className="my-auto p-10 text-stone-300 dark:text-stone-500">
                Search for posts
              </div>
            </div>
          ) : (
            <div className="mb-auto text-stone-200">
              {searchList.length > 0 && (
                <div className="flex flex-row items-center justify-between border-b border-stone-200 px-7 py-8 dark:border-stone-700">
                  <p className="font-bold text-stone-800 dark:text-stone-100">
                    Posts
                  </p>
                  <p className="text-sm text-stone-400 dark:text-stone-400">
                    {searchList.length} posts found
                  </p>
                </div>
              )}
              {searchList.map((post: PostProps) => (
                <div key={post.meta.title} className="h-full rounded-t-3xl">
                  <Link href={`/${post.link}`} passHref>
                    <div
                      onClick={() => closeSearch()}
                      className="cursor-pointer border-b border-stone-200 px-7 py-6 hover:bg-stone-200 dark:border-stone-700 dark:hover:bg-stone-700"
                    >
                      <div className="flex flex-row items-center justify-between">
                        {icontitle(post.meta.categories)}
                        <p className=" text-md mr-auto pl-4 font-semibold text-stone-800 hover:text-default-900 dark:text-stone-300 dark:hover:text-stone-50">
                          {post.meta.title}
                        </p>
                        <div>
                          <SvgtoReact
                            name="arrow-right"
                            className="cursor-pointer justify-self-end fill-current text-stone-300 hover:text-stone-500 dark:text-stone-500 dark:hover:text-stone-400"
                            height={15}
                            width={15}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="sticky bottom-0 flex w-full justify-end rounded-b-2xl border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800">
            <div className="fill-current stroke-current  p-4 text-stone-700 dark:text-stone-400">
              <FullLogo height={30} width={75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
