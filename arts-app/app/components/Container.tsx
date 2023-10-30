// app/components/Container.tsx
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto p-3">{children}</div>;
}
