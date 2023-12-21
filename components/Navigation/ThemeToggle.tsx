"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import SvgtoReact from "../Svgtoreact";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      {theme !== "light" ? (
        <Button variant="bordered" onClick={() => setTheme("light")}>
          <SvgtoReact name="" />
        </Button>
      ) : (
        <Button variant="bordered" onClick={() => setTheme("dark")}>
          Dark
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
