import React from "react";
import { Avatar } from "@nextui-org/avatar";
import SvgtoReact from "@/components/Svgtoreact";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { cookies } from "next/headers";
import { createClient } from "@/lib/utils/supabase/server";
import { Kbd } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

export default async function Nav() {
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

        <Button
          color="default"
          variant="flat"
          className="text-default-500"
          disableRipple
          startContent={<SvgtoReact name="search" width={16} />}
          endContent={<Kbd keys={["command"]}>K</Kbd>}
        >
          Delete user
        </Button>
        <Link href="/profile">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="default"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
