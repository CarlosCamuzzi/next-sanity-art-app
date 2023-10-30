// app/components/GridArt.tsx
import React from "react";

export default function GridArt({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto grid gap-3 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 p-3">
      {children}
    </div>
  );
}
