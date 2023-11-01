// app/components/select/[...id]/page.tsx
"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";

import { ArtContext } from "@/context/Art/ArtContext";
import getArtsById from "@/database/arts/getArtsById";

import ArrowLeft from "@/app/components/icons/ArrowLeft";
import Container from "@/app/components/Container";
import SpinnetArt from "@/app/components/SpinnerArt";
import SelectArt from "@/app/components/SelectArt";
import ComentaryBox from "@/app/components/CommentaryBox";

export default function Select() {
  const path = usePathname();
  const router = useRouter();
  const { artItems, setArtItems } = useContext(ArtContext);
  const [loading, setLoading] = useState(true);

  function handleClickArrowLeft() {
    router.back();
  }

  // Get Arts
  useEffect(() => {
    const index = path.lastIndexOf("/");
    const pathId = path.slice(index + 1);

    const fetchData = async () => {
      const data = (await getArtsById(pathId)) as Art[];

      if (data) setLoading(false);

      setArtItems(data);

      return data;
    };

    fetchData();
  }, [setArtItems]);

  if (loading) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <SpinnetArt />
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Button isIconOnly radius="full" onPress={handleClickArrowLeft}>
          <ArrowLeft />
        </Button>
        <SelectArt
          title={artItems[0].title}
          image={artItems[0].image}
          description={artItems[0].description}
        />
        <Divider />
        <div className="mt-8">
          <div >
            <ComentaryBox />
          </div>
        </div>
      </Container>
    </>
  );
}
