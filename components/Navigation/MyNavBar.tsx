import React from "react";
import { Avatar} from "@nextui-org/avatar";
import {Input} from "@nextui-org/input"
import SvgtoReact from "@/components/Svgtoreact"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar"
import {Link} from "@nextui-org/link"
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown"

export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <SvgtoReact name="logo" height={30} className="stroke-black dark:stroke-white dark:fill-white fill-black" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10">
          <NavbarItem>
            <Link color="foreground" href="https://happynuxtjs.com/">
              NuxtJS
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/about"color="foreground">
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
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SvgtoReact name='search' width={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
