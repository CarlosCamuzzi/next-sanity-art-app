// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import ArtContextProvider from "@/context/Art/ArtContext";
import CommentContext from "@/context/Comment/CommentContext";
import StarContext from "@/context/Star/StarContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <ArtContextProvider>
            <CommentContext>
              <StarContext>{children}</StarContext>
            </CommentContext>
          </ArtContextProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
