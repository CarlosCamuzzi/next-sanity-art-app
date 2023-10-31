import { baseURL } from "./baseURL/baseURLComments";

// database/comments/postComment
const postComment = async (param: any) => {
  console.log(typeof param);
  // console.log(`${baseURL}/comments`);

  // const xTeste = JSON.stringify(param);
  // console.log(xTeste);

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
