// app/components/CommentaryBox.tsx
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
  Image,
  Avatar,
} from "@nextui-org/react";

import getComment from "@/database/comments/getComment";
import postComment from "@/database/comments/postComment";

import { CommentContext } from "@/context/Comment/CommentContext";
import SpinnerForButton from "./SpinnerForButton";

export default function CommentaryBox() {
  const { comment, setComment } = useContext(CommentContext);

  const [textAreaComment, setTextAreaComment] = useState("");
  const [refreshComments, setRefreshComments] = useState(false);
  const [clearTextAreaComment, setClearTextAreaComment] = useState(false);
  const [waitButton, setWaitButton] = useState(false);

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

    const commentText = {
      comment: textAreaComment,
      date: formattedDate,
    };

    postComment(commentText)
      .then((newComment) => {
        setComment((prevComments) => [...prevComments, newComment]);
      })
      .then(() => setClearTextAreaComment(true))
      .then(() => setRefreshComments(true))
      .then(() => setWaitButton(true));
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getComment();

      setComment(data);

      // Apaga o texto do comentário
      if (clearTextAreaComment === true) {
        setTextAreaComment("");
        setClearTextAreaComment(false);
      }
      setRefreshComments(false);
      setWaitButton(false);

      return data;
    };

    fetchData();
  }, [setComment, refreshComments]);

  return (
    <>
      <div className="flex flex-col max-w-xs mx-auto">
        <Textarea
          maxLength={299}
          label="Comentários"
          labelPlacement="outside"
          variant="faded"
          placeholder="Compartilhe a sua opinião"
          value={textAreaComment}
          onChange={(e) => {
            setTextAreaComment(e.target.value);
          }}
        />
        <div className="flex justify-between pt-2 px-2">
          <p className="text-tiny">
            {textAreaComment != undefined && textAreaComment.length + 1}/300
          </p>
          <div className="flex">
            <div className="px-5">
              <Button
                color="danger"
                variant="ghost"
                size="sm"
                onPress={() => setTextAreaComment("")}
              >
                Limpar
              </Button>
            </div>
            <div>
              <Button
                isDisabled={textAreaComment === "" ? true : false}
                color="primary"
                size="sm"
                onPress={handleSendTextComment}
              >
                {!waitButton ? "Enviar" : <SpinnerForButton />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-sm mx-auto mt-8">
        <Divider className="mb-8" />
        {comment?.length > 0 ? (
          comment.map((item, index: number) => (
            <Card key={index} className="my-2">
              <CardHeader className="flex gap-3">
                <Avatar isBordered color="default" size="sm" src={""} />
                <div className="flex flex-row flex-wrap">
                  <p className="text-small mr-20">Nome Usuário</p>
                  <p className="text-tiny text-default-500">{item.date}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-sm flex flex-row flex-wrap">
                  {item.comment}
                </p>
              </CardBody>
            </Card>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
