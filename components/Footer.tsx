import Svgtoreact from "./Svgtoreact";
import SvgtoReact from "./Svgtoreact";
import { subscribeEmail } from "@/app/action";
import { HiEnvelope } from "react-icons/hi2";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { categories, courses, followus, pages, tags } from "@/app/data";
import { socials } from "@/app/about/data";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const AllLiks = (links: { links: string[][] }): JSX.Element => {
    return (
      <div className="flex flex-col gap-y-2 pt-2">
        {links.links.map(([link, href]) => (
          <Link
            color="foreground"
            href={href}
            key={link}
            className="cursor-pointer text-sm text-default-600"
          >
            {link}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="z-50 border-t border-divider bg-background py-unit-2xl">
      <div className="container mx-auto flex w-60 flex-col justify-around space-y-10 text-center text-default-500 sm:w-60 sm:flex-col sm:text-center md:w-full md:flex-row md:items-baseline md:text-left lg:w-full lg:flex-row lg:items-baseline lg:text-left xl:w-full xl:flex-row xl:items-baseline xl:text-left">
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            Pages
          </p>
          <AllLiks links={pages.pages} />
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            Tags
          </p>
          <AllLiks links={tags.pages} />
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            Categories
          </p>
          <AllLiks links={categories.pages} />
        </div>
        <div>
          <p className="font-semibold text-default-900 dark:text-stone-50">
            {followus.title}
          </p>
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
            <form action={subscribeEmail}>
              <Input
                type="email"
                label={followus.sub}
                className="pt-unit-xl"
                placeholder="you@example.com"
                labelPlacement="outside"
                endContent={
                  <Button
                    disableRipple
                    type="submit"
                    isIconOnly
                    color="default"
                    variant="light"
                    aria-label="Like"
                  >
                    <HiEnvelope />
                  </Button>
                }
              />
            </form>
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
        <p className="text-sm text-stone-400 dark:text-stone-500">
          Copyright © {currentYear} Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
