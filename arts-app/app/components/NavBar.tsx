// app/components/NavBar.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import IconBox from "./icons/Box";
import LoginButton from "./LoginButton";

export default function NavBar() {
  const path = usePathname();

  return (
    <Navbar isBordered isBlurred={true}>
      <NavbarBrand>
        <IconBox />
        <p className="font-bold text-inherit p-3">ArtsIA App</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive={path === "/"}>
          <Link color="foreground" href="/">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path === "/arts"}>
          <Link color="foreground" href="/arts">
            Artes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
