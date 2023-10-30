// app/(arts)/art/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import SkeletonCard from "@/app/components/SkeletonCard";
import ArtCard from "@/app/components/ArtCard";
import getArts from "@/database/getArts";
import GridArt from "@/app/components/GridArt";

export default function ArtPage() {
  const [loading, setLoading] = useState(true);
  const [art, setArt] = useState<Art[] | undefined>();

  const skeleton = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getArts()) as Art[];
      if (data) setLoading(false);

      setArt(data);
      console.log(data[0].image);
      return data;
    };
    fetchData();
  }, [setArt]);

  if (loading) {
    return (
      <GridArt>
        {skeleton?.map((index) => (
          <SkeletonCard key={index} />
        ))}
      </GridArt>
    );
  }
  return (
    <GridArt>
      {art?.map((data) => (
        <ArtCard key={data._id} data={data} />
      ))}
    </GridArt>
  );
}
