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
import { useTheme } from "next-themes";

export default function Select() {
  const path = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  const { artItems, setArtItems } = useContext(ArtContext);
  const [loading, setLoading] = useState(true);

  function handleClickArrowLeft() {
    router.back();
  }

  function handleGetArtIdInPathName() {
    const index = path.lastIndexOf("/");
    const artId = path.slice(index + 1);

    return artId;
  }

  // Get Arts
  useEffect(() => {
    const artId = handleGetArtIdInPathName();

    const fetchData = async () => {
      const data = (await getArtsById(artId)) as Art[];

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
        <Button
          className={`${
            theme == "dark" ? "hover:bg-gray-500" : "hover:bg-gray-200"
          }`}
          isIconOnly
          radius="full"
          onPress={handleClickArrowLeft}
        >
          <ArrowLeft />
        </Button>
        <SelectArt
          title={artItems[0].title}
          image={artItems[0].image}
          description={artItems[0].description}
        />
        <Divider />
        <div className="mt-8">
          <div>
            <ComentaryBox />
          </div>
        </div>
      </Container>
    </>
  );
}
