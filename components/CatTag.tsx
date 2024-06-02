import { Link } from '@nextui-org/link'
import type { CatTagProps } from '../lib/types/blog'
import SvgtoReact from './Svgtoreact'
import { Chip } from '@nextui-org/chip'
import { Button } from '@nextui-org/button'

export default function CatTag({
  current,
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
      <div className="flex flex-row flex-wrap gap-3">
        {tags?.map((cat) => (
          <div key={cat}>
            <Link href={`/tag/${cat}`}>
              <Chip
                color={cat === current ? 'primary' : 'default'}
                size="sm"
                variant={cat === current ? 'solid' : 'flat'}
              >
                {cat}
              </Chip>{' '}
            </Link>
          </div>
        ))}
        {categories?.map((cat) => (
          <div key={cat}>
            <Button
              href={`/category/${cat}`}
              as={Link}
              disableRipple
              variant="light"
              startContent={
                <SvgtoReact name={cat.toLowerCase()} height={20} width={20} />
              }
            >
              {cat}
            </Button>
          </div>
        ))}
      </div>
      {banner?.map(([subtitle, link, href]) => (
        <div key={link}>
          <p className="block pb-2 text-sm leading-normal text-default-600">
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
  )
}
