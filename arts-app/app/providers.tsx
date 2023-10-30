// app/providers.tsx
"use client";

import ArtContextProvider from "@/context/Art/ArtContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ArtContextProvider>{children}</ArtContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
