import Svgtoreact from './Svgtoreact'
import SvgtoReact from './Svgtoreact'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import {
  categories,
  courses,
  followus,
  pages,
  tags,
} from '@/app/(application)/data'
import { socials } from '@/app/(application)/about/data'
import FooterSubButton from './FooterSubButton'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()
  const AllLiks = (links: { links: string[][] }): JSX.Element => {
    return (
      <div className="flex flex-col gap-y-2 pt-2">
        {links.links.map(([link, href]) => (
          <Link
            color="foreground"
            href={href}
            key={link}
            underline="hover"
            size="sm"
            className="cursor-pointer text-default-600"
          >
            {link}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="z-50 border-t border-divider bg-background py-12">
      <div className="container mx-auto flex w-60  flex-col justify-around space-y-10 text-center text-default-500 sm:w-60 sm:flex-col sm:text-center md:w-full md:flex-row md:items-baseline md:text-left lg:w-full lg:flex-row lg:items-baseline lg:text-left xl:w-full xl:flex-row xl:items-baseline xl:text-left">
        <div>
          <p className="font-semibold text-foreground">Pages</p>
          <AllLiks links={pages.pages} />
        </div>
        <div>
          <p className="font-semibold text-foreground">Tags</p>
          <AllLiks links={tags.pages} />
        </div>
        <div>
          <p className="font-semibold text-foreground">Categories</p>
          <AllLiks links={categories.pages} />
        </div>
        <div>
          <p className="font-semibold text-foreground">{followus.title}</p>
          <div>
            <div className="flex flex-row justify-center space-x-1 pt-3 sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              {socials.map(([link, icon]) => (
                <Button
                  href={link}
                  key={link}
                  as={Link}
                  size="sm"
                  isIconOnly
                  disableRipple
                  color="default"
                  variant="light"
                >
                  <SvgtoReact
                    name={icon}
                    height={14}
                    className="cursor-pointer fill-current text-default-500 hover:text-default-900"
                  />
                </Button>
              ))}
            </div>
            <FooterSubButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-7 pt-5">
        <div className="flex flex-row gap-x-3">
          {courses.map((icon) => (
            <Svgtoreact
              key={icon}
              className="fill-current text-default-500"
              name={icon}
              height={30}
            />
          ))}
        </div>
        <div className="justify-self-auto fill-current stroke-current text-stone-500 dark:text-stone-400">
          <Svgtoreact name="fulllogo" height={20} width={100} />
        </div>
        <p className="text-sm text-default-400">
          Copyright © {currentYear} Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}
