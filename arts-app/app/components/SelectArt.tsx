import React, { useState } from "react";
import { Divider, Image } from "@nextui-org/react";

import Star from "./Star";

export default function SelectArt({ ...props }) {
  return (
    <section className="flex justify-around min-h-full m-10">
      <div className="p-3">
        <Image
          isZoomed
          shadow="md"
          width={500}
          alt={props.title}
          src={props.image}
        />
        <div className="mt-5 flex justify-center">
          <Star />
        </div>
      </div>

      <div className="flex flex-col ml-5 mt-3">
        <div>
          <h2 className="text-lg text font-bold">{props.title}</h2>
        </div>

        <div>
          <Divider className="my-4" />
        </div>

        <div>
          <p className="text-small">{props.description}</p>
        </div>
      </div>
    </section>
  );
}
