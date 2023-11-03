import React, { useContext, useEffect, useState } from "react";
import IconStarEmpty from "./icons/StarEmpty";
import IconStarFull from "./icons/StarFull";
import { StarContext } from "@/context/Star/StarContext";

const Star = () => {
  const totalStars = 5;
  const { star, setStar } = useContext(StarContext);
  const starValue = star.star;

  // Atualiza a quantidade de estrelas vazias/preenchidas
  function handleStarsClick(index: number): void {
    if (index == 0 && starValue == 1) {
      setStar({ star: 0 });
      console.log(index);
    } else {
      setStar({ star: index + 1 });
      console.log(index);
    }
  }

  return (
    <>
      {Array.from({ length: totalStars }).map((_, index) => (
        <div key={index} onClick={() => handleStarsClick(index)}>
          {index < starValue ? (
            <IconStarFull className="mr-1 cursor-pointer" />
          ) : (
            <IconStarEmpty className="mr-1 cursor-pointer" />
          )}
        </div>
      ))}
    </>
  );
};

export default Star;
