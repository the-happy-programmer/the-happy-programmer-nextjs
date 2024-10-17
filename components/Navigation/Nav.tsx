import React from 'react'
import { Avatar } from '@nextui-org/avatar'
import SvgtoReact from '@/components/Svgtoreact'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import ThemeToggle from './ThemeToggle'
import SearchTrigger from './SearchTrigger'
import { PostProps } from '@/lib/types/blog'
import { getAllDocs } from '@/lib/courseslib/courseapi'
import { auth } from '@/auth'

const posts: PostProps[] = getAllDocs('course/blog').map((post: PostProps) => ({
  link: post.link,
  meta: post.meta,
}))

export default async function Nav() {
  const session = await auth()

  return (
    <Navbar isBordered className="py-1">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <SvgtoReact
              name="logo"
              height={30}
              className="fill-black stroke-black dark:fill-white dark:stroke-white"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-10 sm:flex">
          <NavbarItem>
            <Link color="foreground" href="https://happynuxtjs.com/">
              NuxtJS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" color="foreground">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/blog">
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <ThemeToggle />
        <SearchTrigger posts={posts} />
        {session ? (
          <Link href="/profile">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              title={session.user?.name as string}
              name={session.user?.name as string}
              size="sm"
              src={session.user?.image as string}
            />
          </Link>
        ) : (
          <Button
            href="/signin"
            disableRipple
            as={Link}
            color="primary"
            variant="flat"
          >
            Sign In
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  )
}
