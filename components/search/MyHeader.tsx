import { PostProps } from '../../lib/types/blog';
import SearchIcon from '@/public/svg/search.svg';
import SearchButton from './SearchButton';

export default function MyHeader({
  title,
  subtitle,
  posts,
}: {
  title: string;
  subtitle: string;
  posts: PostProps[];
}) {
  return (
    <div className="container px-4 pt-10 sm:pt-12 md:pt-16  lg:pt-20 xl:pt-20">
      <h2 className="text-xs uppercase text-default-600">{subtitle}</h2>
      <h1 className="text-4xl font-semibold tracking-tight lg:text-4xl">
        {title}
      </h1>
      <div className="w- group relative float-left mt-10">
        <div className="absolute inset-y-0 left-0 ml-3.5 flex items-center">
          <SearchIcon
            height={16}
            width={16}
            className="stroke-current text-stone-500 group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-50"
          />
        </div>
        <SearchButton posts={posts} />
      </div>
    </div>
  );
}
