// app/components/select/[...id]/page.tsx
"use client";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArtContext } from "@/context/Art/ArtContext";
import getArtsById from "@/database/getArtsById";
import Container from "@/app/components/Container";
import SpinnetArt from "@/app/components/SpinnerArt";
import SelectArt from "@/app/components/SelectArt";
import ArrowLeft from "@/app/components/icons/ArrowLeft";
import { Button } from "@nextui-org/react";

export default function Select() {
  const path = usePathname();
  const router = useRouter();
  const { artItems, setArtItems } = useContext(ArtContext);
  const [loading, setLoading] = useState(true);

  function handleClickArrowLeft() {
    router.back();
  }

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
        <SpinnetArt />
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
      </Container>
    </>
  );
}
