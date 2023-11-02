// app/components/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

import IconDarkMode from "./icons/DarkMode";
import IconLigthMode from "./icons/LightMode";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handlePress() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  if (!mounted) return null;

  return (
    <div>
      {theme == "dark" ? (
        <Button
          className={`${
            theme == "dark" ? "hover:bg-gray-500" : "hover:bg-gray-200"
          }`}
          isIconOnly
          color="default"
          aria-label="Dark Mode"
          onPress={handlePress}
        >
          <IconLigthMode />
        </Button>
      ) : (
        <Button
          className={`${
            theme == "dark" ? "hover:bg-gray-500" : "hover:bg-gray-200"
          }`}
          isIconOnly
          color="default"
          aria-label="Ligth Mode"
          onPress={handlePress}
        >
          <IconDarkMode />
        </Button>
      )}
    </div>
  );
}
