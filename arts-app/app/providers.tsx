// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ArtContextProvider from "@/context/Art/ArtContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ArtContextProvider>{children}</ArtContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
