// database/comments/postComment.ts
import { baseURL } from "../baseURL/baseURLComments";

const postComment = async (param: any) => {
  console.log(param);

  return await fetch(`${baseURL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(param),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((e) => console.error(e));
};

export default postComment;
