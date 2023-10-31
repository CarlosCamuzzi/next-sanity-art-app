// app/(arts)/art/page.tsx
"use client";

import React, { useEffect, useState } from "react";

import getArts from "@/database/arts/getArts";

import SkeletonCard from "@/app/components/SkeletonCard";
import ArtCard from "@/app/components/ArtCard";
import GridArt from "@/app/components/GridArt";
//import PaginationArt from "@/app/components/PaginationArt";
import Container from "@/app/components/Container";

export default function ArtPage() {
  const [loading, setLoading] = useState(true);
  const [art, setArt] = useState<Art[] | undefined>();

  const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getArts()) as Art[];

      if (data) setLoading(false);

      setArt(data);

      return data;
    };

    fetchData();
  }, [setArt]);

  if (loading) {
    return (
      <Container>
        <GridArt>
          {skeleton.map((index) => (
            <SkeletonCard key={index} />
          ))}
        </GridArt>
      </Container>
    );
  }
  return (
    <Container>
      <GridArt>
        {art?.map((data, index) => (
          <ArtCard key={data._id} data={data} index={index} />
        ))}
      </GridArt>
      {/* <div className="flex justify-center">
        <PaginationArt size={art?.length} />
      </div> */}
    </Container>
  );
}
