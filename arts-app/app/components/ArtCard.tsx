// app/components/ImageCard.tsx
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function ArtCard({ ...props }) {
  const route = useRouter();
  const { theme } = useTheme();

  function handlePressArtCard(data: Art) {
    route.push(`/select/${data.slug}/${data._id}`);
  }

  return (
    <Card
      isPressable
      className={`flex py-2  ${
        theme == "dark" ? "hover:bg-stone-800" : "hover:bg-stone-100"
      } `}
      onPress={() => handlePressArtCard(props.data)}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <h4 className="font-bold">{props.data.title}</h4>
        <small className="text-default-500 text-tiny py-1">
          <p>{props.data.description}</p>
        </small>
      </CardHeader>
      <CardBody className="items-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.data.image}
          width={180}
          height={180}
        />
      </CardBody>
    </Card>
  );
}
