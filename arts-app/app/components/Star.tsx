// app/components/Star.tsx
import React, { useContext } from "react";

import { StarContext } from "@/context/Star/StarContext";

import IconStarEmpty from "./icons/StarEmpty";
import IconStarFull from "./icons/StarFull";

const Star = () => {
  const { star, setStar } = useContext(StarContext);
  const starValue = star.star;
  const totalStars = 5;

  // Atualiza a quantidade de estrelas vazias/preenchidas
  function handleStarsClick(index: number): void {
    if (index == 0 && starValue == 1) {
      setStar({ star: 0 });
    } else {
      setStar({ star: index + 1 });
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
