import Link from 'next/link';
import type { CatTagProps } from '../lib/types/blog';
import SvgtoReact from './Svgtoreact';
import { Chip } from '@nextui-org/chip';

export default function CatTag({
  categories,
  title,
  tags,
  banner,
}: CatTagProps): JSX.Element {
  return (
    <div className="hidden pt-6 md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
      <p className="py-2 text-xs font-bold uppercase text-content1-foreground">
        {title}
      </p>
      <div className="divide-y divide-divider">
        {tags?.map((cat) => (
          <div className="py-2.5" key={cat}>
            <Link href={`/tag/${cat}`}>
              <Chip color="default" size="sm" variant="flat">
                {cat}
              </Chip>{' '}
            </Link>
          </div>
        ))}
        {categories?.map((cat) => (
          <div className="py-2.5" key={cat}>
            <Link
              href={`/category/${cat}`}
              className="flex cursor-pointer flex-row  text-sm text-stone-600 hover:text-default-900 dark:text-stone-300 dark:hover:text-stone-50"
            >
              <>
                <div>
                  <SvgtoReact
                    className="pr-2"
                    name={cat.toLowerCase()}
                    height={20}
                  />
                </div>
                <p className="overflow-hidden overflow-ellipsis">{cat}</p>
              </>
            </Link>
          </div>
        ))}
      </div>
      {banner?.map(([subtitle, link, href]) => (
        <div key={link}>
          <p className="block pb-2 text-sm leading-normal text-stone-600 dark:text-stone-400">
            {subtitle}
          </p>
          <a
            href={href}
            className="text-accent dark:text-darkaccent text-sm hover:underline"
          >
            {link}
          </a>
        </div>
      ))}
    </div>
  );
}
