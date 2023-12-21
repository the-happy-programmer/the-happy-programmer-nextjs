import HappyLink from "@/components/HappyLink";
import Postbody from "@/components/PostBody";
import SvgtoReact from "@/components/Svgtoreact";
import Subscribe from "@/components/home/Subscribe";
import Headerlayout from "@/widget/Headerlayout";
import Image from "next/image";
import RichDataPost from "@/components/seo/RichDataPost";
import Link from "next/link";
import { getAllinks, getDocBySlug } from "@/lib/courseslib/courseapi";
import { ReactNode } from "react";
import { socials, subscribe } from "./data";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = getDocBySlug(params.slug, "course/blog");
  console.log(meta);
  return {
    title: meta.coursetitle,
    description: meta.description,
    openGraph: {
      title: meta.coursetitle + " | The Happy Programmer",
      description: meta.description,
      images: [`${process.env.SITE_URL}/placeholder-hero.jpg`],
    },
  };
}

export async function generateStaticParams() {
  const allSlugs = getAllinks("course/blog");
  return (
    allSlugs.map(({ name }) => ({
      slug: name,
    })) || []
  );
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = getDocBySlug(slug as string, "course/blog");
  const { author, pubDate, categories, title, avatar, description } = post.meta;
  const postIcon = (categories: string[]): ReactNode =>
    categories.map((category) => (
      <div key={category} className="h-16">
        <SvgtoReact height={60} width={60} className="mr-4" name={category} />
      </div>
    ));

  return (
    <>
      <RichDataPost
        title={title}
        description={description}
        date={pubDate}
        firstName={author}
        image={"/me.webp"}
        slug={`/${author.toLowerCase()}`}
      />
      <Headerlayout>
        <div className="container flex flex-col items-center px-3 py-3">
          <Link
            href="/blog"
            className="fill-current flex flex-row place-self-start pl-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <>
              <SvgtoReact
                className="mr-3 rotate-90 transform self-center "
                name="arrow"
                height={15}
                width={15}
              />
              Back to posts
            </>
          </Link>
          {postIcon(categories)}
          <h1 className="p-3 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            {title}
          </h1>
          <div className="center flex flex-row">
            <div className="mt-1 place-self-end">
              <Image
                src={avatar}
                height={35}
                width={35}
                alt="Picture of the author"
                className="rounded-full "
              />
            </div>
            <div className="mt-0 flex flex-col pl-2">
              <HappyLink
                href={`author/${author.toLowerCase()}`}
                classes="text-gray-900 dark:text-gray-50 hover:underline"
              >
                {author}
              </HappyLink>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {pubDate}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            {socials.map(([link, names], i) => (
              <div key={link} className="text-gray-500 dark:text-gray-300">
                <HappyLink
                  key={names}
                  href={link}
                  classes="px-1.5 text-accent dark:text-darkaccent hover:underline"
                >
                  {names}
                </HappyLink>
                {socials.length - 1 === i ? "" : "•"}
              </div>
            ))}
          </div>
        </div>
      </Headerlayout>
      <Postbody content={post.content} />
      <div className="bg-gray-100  dark:bg-gray-800">
        <Subscribe title={subscribe.title} subtitle={subscribe.subtitle} />
      </div>
    </>
  );
}
