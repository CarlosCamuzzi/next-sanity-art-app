// app/components/ComentaryBox.tsx
import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import postComment from "@/database/postComments";

export default function ComentaryBox() {
  const [text, setText] = useState("");

  function handleSendText() {
    const comment = {
      comment: text,
    };
    postComment(comment);
  }

  return (
    <div className="py-5">
      <div className="flex flex-col max-w-xs mx-auto">
        <Textarea
          maxLength={200}
          label="Comentários"
          labelPlacement="outside"
          variant="faded"
          placeholder="Compartilhe a sua opinião"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="flex justify-between pt-2 px-2">
          <p className="text-tiny">
            {text != undefined && text.length + 1}/200
          </p>
          <div className="flex">
            <div className="px-5">
              <Button
                color="danger"
                variant="ghost"
                size="sm"
                onPress={() => setText("")}
              >
                Limpar
              </Button>
            </div>
            <div>
              <Button color="primary" size="sm" onPress={handleSendText}>
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
