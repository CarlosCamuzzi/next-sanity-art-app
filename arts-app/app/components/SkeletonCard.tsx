// app/components/SkeletonCard.tsx
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonCard() {
  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <>
      {skeleton.map((index) => (
        <Card key={index} className="space-y-5 p-4" radius="lg" shadow="sm">
          <div className="flex flex-col items-center space-y-3">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <Skeleton className="rounded-lg h-full">
            <div className="h-24 bg-default-300"></div>
          </Skeleton>
        </Card>
      ))}
    </>
  );
}
