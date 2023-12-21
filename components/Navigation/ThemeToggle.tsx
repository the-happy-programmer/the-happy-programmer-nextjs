"use client";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { HiMiniSun } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme !== "light" ? (
        <Button
          disableRipple
          isIconOnly
          variant="flat"
          onClick={() => setTheme("light")}
        >
          <HiMiniSun className="" />
        </Button>
      ) : (
        <Button
          disableRipple
          isIconOnly
          variant="flat"
          onClick={() => setTheme("dark")}
        >
          <HiMiniMoon />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
