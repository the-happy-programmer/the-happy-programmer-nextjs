"use client";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMiniSun } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {theme !== "light" ? (
        <Button
          disableRipple
          isIconOnly
          variant="light"
          onClick={() => setTheme("light")}
        >
          <HiMiniSun className="fill-default-600" />
        </Button>
      ) : (
        <Button
          disableRipple
          isIconOnly
          variant="light"
          onClick={() => setTheme("dark")}
        >
          <HiMiniMoon className="fill-default-600" />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
