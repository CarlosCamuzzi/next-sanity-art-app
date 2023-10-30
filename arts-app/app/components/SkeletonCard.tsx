// app/components/SkeletonCard.tsx
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonCard() {
  return (
    <Card className="space-y-5 p-4" radius="lg">
      <div className="space-y-3">
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
  );
}
