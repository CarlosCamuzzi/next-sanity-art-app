// database/comments/getComment.ts
import { baseURL } from "../baseURL/baseURLComments";

//const getComment = async (artId: string) => {
//   return await fetch(`${baseURL}/comments/${artId}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json)
//     .then(() => console.log(data))
//     .catch((e) => console.log(e));
// };

const getComment = async (artId: string) => {
  try {
    const response = await fetch(`${baseURL}/comments/${artId}`, {
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
