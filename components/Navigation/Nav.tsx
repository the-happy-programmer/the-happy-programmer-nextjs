import React from 'react';
import { Avatar } from '@nextui-org/avatar';
import SvgtoReact from '@/components/Svgtoreact';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/utils/supabase/server';
import ThemeToggle from './ThemeToggle';
import SearchTrigger from './SearchTrigger';
import { PostProps } from '@/lib/types/blog';

export default async function Nav({ posts }: { posts: PostProps[] }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
        {user ? (
          <Link href="/profile">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              title={user?.user_metadata?.user_name}
              name={user?.user_metadata?.user_name}
              size="sm"
              src={user?.user_metadata.avatar_url}
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
  );
}
