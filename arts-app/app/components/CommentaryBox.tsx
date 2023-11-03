// app/components/CommentaryBox.tsx
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
  Avatar,
} from "@nextui-org/react";

import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import getComment from "@/database/comments/getComment";
import postComment from "@/database/comments/postComment";

import { CommentContext } from "@/context/Comment/CommentContext";

import SpinnerForButton from "./SpinnerForButton";
import SpinnetArt from "./SpinnerArt";
import { setTimeout } from "timers/promises";
import { StarContext } from "@/context/Star/StarContext";
import IconStarEmpty from "./icons/StarEmpty";
import IconStarFull from "./icons/StarFull";

export default function CommentaryBox() {
  const { data: session } = useSession();
  const path = usePathname();

  const { comment, setComment } = useContext(CommentContext);
  const { star } = useContext(StarContext);

  const [textAreaComment, setTextAreaComment] = useState("");
  const [refreshComments, setRefreshComments] = useState(false);
  const [clearTextAreaComment, setClearTextAreaComment] = useState(false);
  const [waitButton, setWaitButton] = useState(false);
  const [loadingCommentList, setLoadingCommentList] = useState(true);
  const [starFill, setStarFill] = useState<number>(0);

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

  function handleGetArtIdInPathName() {
    const index = path.lastIndexOf("/");
    const artId = path.slice(index + 1);

    return artId;
  }

  // Post
  function handleSendTextComment() {
    const formattedDate = handleFormatDate();
    const artId = handleGetArtIdInPathName();

    const commentText = {
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      userPhoto: session?.user?.image,
      artId: artId,
      comment: textAreaComment,
      date: formattedDate,
      avaliation: star.star,
    };

    console.log(commentText);

    postComment(commentText)
      .then((newComment) => {
        setComment((prevComments) => [...prevComments, newComment]);
      })
      .then(() => setClearTextAreaComment(true))
      .then(() => setRefreshComments(true))
      .then(() => setWaitButton(true));
  }

  useEffect(() => {
    const artId = handleGetArtIdInPathName();

    const fetchData = async () => {
      const data = await getComment(artId);

      setComment(data);

      if (data) setLoadingCommentList(false);

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

  // Spínner enquanto carrega
  if (loadingCommentList) {
    <>
      <div className="flex flex-col max-w-sm mx-auto mt-8">
        <SpinnetArt />
      </div>
    </>;
  }

  return (
    <>
      <div className="flex flex-col max-w-xs mx-auto">
        <p className="place-self-center text-sm pb-2">
          Deixa seu comentário e avaliação
        </p>

        {/* Somente se usuário não logado */}
        {!session ? (
          <>
            <span className="flex flex-col items-center mb-8 mt-2 text-sm font-bold">
              <p>Você precisa estar logado para comentar.</p>
              <a
                onClick={() => signIn("google")}
                className="pt-1 text-sm text-blue-500 cursor-pointer hover:text-blue-400"
              >
                Clique Aqui
              </a>
            </span>
            <Divider className="mb-8" />
          </>
        ) : (
          <></>
        )}

        {/* Área de comentário */}
        <>
          <Textarea
            isDisabled={!session}
            maxLength={300}
            label=""
            labelPlacement="outside"
            variant="faded"
            placeholder="Compartilhe a sua opinião"
            value={textAreaComment}
            onChange={(e) => {
              setTextAreaComment(e.target.value);
            }}
          />
        </>

        {/* Contagem de caracteres */}
        <div className="flex justify-between pt-2 px-2">
          <p
            className={`text-tiny ${!session ? "text-gray-500" : "text-white"}`}
          >
            {textAreaComment != undefined && textAreaComment.length}/300
          </p>

          {/* Botões Enviar e Limpar   */}
          <div className="flex">
            <div className="px-5">
              <Button
                isDisabled={!session}
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
                className="hover:bg-blue-500"
                onPress={handleSendTextComment}
              >
                {!waitButton ? "Enviar" : <SpinnerForButton />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Divisão */}
      <div>
        <Divider className="my-8" />
      </div>

      {/* Todos comentários */}
      <div className="flex flex-col max-w-sm mx-auto mt-8">
        {!loadingCommentList ? (
          <>
            {comment?.length > 0 ? (
              comment.map((item, index: number) => (
                <Card key={index} className="my-2">
                  <CardHeader className="flex gap-3">
                    <Avatar
                      isBordered
                      //color={session ? "success" : "default"}
                      color={"default"}
                      size="sm"
                      src={item.userPhoto}
                    />
                    <div className="flex flex-row flex-wrap">
                      <p className="text-small mr-20">{item.userName}</p>
                      <p className="text-tiny text-default-500">{item.date}</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-tiny text-default-500">Avaliação</p>
                      <div className="flex">
                        {Array.from({ length: item.avaliation }).map(
                          (_, index) => (
                            <IconStarFull key={index} className="w-3" />
                          )
                        )}
                      </div>
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
          </>
        ) : (
          // Colocar um set time out aqui
          <SpinnetArt />
        )}
      </div>
    </>
  );
}
