import Postbody from '@/components/PostBody'
import SvgtoReact from '@/components/Svgtoreact'
import Subscribe from '@/components/home/Subscribe'
import Headerlayout from '@/widget/Headerlayout'
import RichDataPost from '@/components/seo/RichDataPost'
import { getAllinks, getDocBySlug } from '@/lib/courseslib/courseapi'
import { ReactNode } from 'react'
import { socials } from './data'
import { Metadata, ResolvingMetadata } from 'next'
import { subscribe } from '../data'
import { HiArrowSmallLeft } from 'react-icons/hi2'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { Avatar } from '@nextui-org/avatar'
import { Code } from '@/components/Code'

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = getDocBySlug(params.slug, 'course/blog')
  return {
    title: meta.coursetitle,
    description: meta.description,
    openGraph: {
      title: meta.coursetitle + ' | The Happy Programmer',
      description: meta.description,
    },
  }
}

export async function generateStaticParams() {
  const allSlugs = getAllinks('course/blog')
  return (
    allSlugs.map(({ name }) => ({
      slug: name,
    })) || []
  )
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = getDocBySlug(slug as string, 'course/blog')
  const { author, pubDate, categories, title, avatar, description } = post.meta
  const postIcon = (categories: string[]): ReactNode =>
    categories.map((category) => (
      <div key={category} className="h-16">
        <SvgtoReact height={60} width={60} className="mr-4" name={category} />
      </div>
    ))

  return (
    <>
      <RichDataPost
        title={title}
        description={description}
        date={pubDate}
        firstName={author}
        image={'/me.webp'}
        slug={`/${author.toLowerCase()}`}
      />
      <Headerlayout>
        <div className="container flex flex-col items-center px-3 py-3">
          <Button
            disableRipple
            as={Link}
            href="/blog"
            className="place-self-start"
            variant="light"
            startContent={<HiArrowSmallLeft />}
          >
            Back to posts
          </Button>
          {postIcon(categories)}
          <h1 className="p-unit-sm text-center text-3xl font-bold">{title}</h1>
          <div className="center flex flex-row">
            <div className="mt-1 place-self-end">
              <Avatar isBordered color="default" src={avatar} />
            </div>
            <div className="mt-0 flex flex-col pl-2">
              <Link
                href={`author/${author.toLowerCase()}`}
                underline="hover"
                color="foreground"
              >
                {author}
              </Link>
              <p className="text-sm text-default-600">{pubDate}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-x-unit-xs">
            {socials.map(([link, names], i) => (
              <div key={link}>
                <Link href={link} underline="hover">
                  {names}
                </Link>
                <p className="text-default-400">
                  {socials.length - 1 === i ? '' : '•'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Headerlayout>
      <Code
        code={`
  \`\`\`elixir title="fib.ex" showLineNumbers /palindrome/#v
  defmodule Solution do
    @spec is_palindrome(x :: integer) :: boolean
    def is_palindrome(x) when x < 0, do: false
    def is_palindrome(x), do: do_is_palindrome(x, get_base_10(x, 1))
    defp do_is_palindrome(x, b10) when b10 > 1,
      do: get_first_digit(x, b10) == rem(x, 10) and do_is_palindrome(div(x, 10), div(b10, 100))
    defp do_is_palindrome(_, _), do: true
    defp get_first_digit(n, b10), do: div(n, b10) |> rem(10)
    defp get_base_10(n, b10) when n >= b10, do: get_base_10(n, b10 * 10)
    defp get_base_10(n, b10), do: div(b10, 10)
  end
  \`\`\``}
      />
      <Postbody content={post.content} />
      <Subscribe title={subscribe.title} subtitle={subscribe.subtitle} />
    </>
  )
}
