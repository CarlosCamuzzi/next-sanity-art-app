// app/components/ComentaryBox.tsx
import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import postComment from "@/database/comments/postComment";

export default function ComentaryBox() {
  const [textComment, setTextComment] = useState("");

  function handleFormatDate() {
    const date = new Date();

    const minutes = date.getMinutes();
    const day = date.getDay();
    const seconds = date.getSeconds();
    const hours = date.getHours();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const formattedDate = `${formattedDay}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${formattedHours}:${formattedMinutes}.${formattedSeconds}s`;

    return formattedDate;
  }

  function handleSendTextComment() {
    const formattedDate = handleFormatDate();

    const comment = {
      comment: textComment,
      date: formattedDate,
    };
    postComment(comment);
  }

  return (
    // <div className="py-5">
    //   <div className="flex flex-col max-w-xs mx-auto">
    <>
      <Textarea
        maxLength={200}
        label="Comentários"
        labelPlacement="outside"
        variant="faded"
        placeholder="Compartilhe a sua opinião"
        value={textComment}
        onChange={(e) => {
          setTextComment(e.target.value);
        }}
      />
      <div className="flex justify-between pt-2 px-2">
        <p className="text-tiny">
          {textComment != undefined && textComment.length + 1}/200
        </p>
        <div className="flex">
          <div className="px-5">
            <Button
              color="danger"
              variant="ghost"
              size="sm"
              onPress={() => setTextComment("")}
            >
              Limpar
            </Button>
          </div>
          <div>
            <Button
              isDisabled={textComment === "" ? true : false}
              color="primary"
              size="sm"
              onPress={handleSendTextComment}
              // onKeyDown={() => handleSendTextComment()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </>
    //   </div>
    // </div>
  );
}
