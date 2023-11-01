// app/components/select/[...id]/page.tsx
"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";

import getArtsById from "@/database/arts/getArtsById";
import { ArtContext } from "@/context/Art/ArtContext";
import { CommentContext } from "@/context/Comment/CommentContext";

import ArrowLeft from "@/app/components/icons/ArrowLeft";
import Container from "@/app/components/Container";
import SpinnetArt from "@/app/components/SpinnerArt";
import SelectArt from "@/app/components/SelectArt";
import ComentaryBox from "@/app/components/ComentaryBox";
import CommentaryList from "@/app/components/CommentaryList";
import getComment from "@/database/comments/getComment";

export default function Select() {
  const path = usePathname();
  const router = useRouter();

  const { artItems, setArtItems } = useContext(ArtContext);
  const { comment, setComment } = useContext(CommentContext);

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

  // Get Comments
  useEffect(() => {
    const fetchData = async () => {
      const data = await getComment();

      console.log(data);
      setComment(data);

      return data;
    };

    fetchData();
  }, [setComment]);

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
        <div className="py-5">
          <div className="flex flex-col max-w-xs mx-auto">
            <ComentaryBox />
          </div>

          <div className="flex flex-col max-w-sm mx-auto mt-12">
            {comment?.length > 0 ? (
              comment.map((item, index: number) => (
                <CommentaryList
                  key={index}
                  comment={item.comment}
                  date={item.date}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
