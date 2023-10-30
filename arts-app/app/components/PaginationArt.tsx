// app/components/PaginationArt.tsx
import React from "react";
import { Pagination } from "@nextui-org/react";

export default function PaginationArt(
  { ...props },
  { children }: { children: React.ReactNode }
) {
  const pages = 24 / 12;

  return (
    <>
      {props.size > 12 ? (
        <Pagination
          showShadow
          color="default"
          size="sm"
          total={props.size / 12}
          initialPage={1}
        />
      ) : (
        <></>
      )}
      {children}
    </>
  );
}
