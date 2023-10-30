import React from "react";
import { Textarea } from "@nextui-org/react";

export default function ComentaryBox() {
  return (
    <Textarea
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />
  );
}
