// database/comments/getCommentById.ts
import { baseURL } from "../baseURL/baseURLComments";

const getComment = async (id: string) => {
  try {
    const response = await fetch(`${baseURL}/comments/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados dos comentários.");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

export default getComment;
