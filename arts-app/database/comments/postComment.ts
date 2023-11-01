// database/comments/postComment.ts
import { baseURL } from "../baseURL/baseURLComments";

const postComment = async (param: any) => {
  try {
    const response = await fetch(`${baseURL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    });

    if (!response.ok) {
      throw new Error("Não foi possível enviar seu comentário.");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

export default postComment;
