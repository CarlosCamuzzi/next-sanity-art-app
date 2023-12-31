// import React, { useContext, useEffect } from "react";
// import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
// import { useSession } from "next-auth/react";
// import { CommentContext } from "@/context/Comment/CommentContext";

// export default function CommentaryList({ ...props }) {
//   const { data: session } = useSession();
//   const { comment, setComment } = useContext(CommentContext);

//   useEffect(() => {
//     console.log("re render");
//   }, [comment]);

//   return (
//     <>
//       <Card className="my-2">
//         <CardHeader className="flex gap-3">
//           <Image
//             alt="Foto do Usuário"
//             height={40}
//             radius="sm"
//             src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
//             width={40}
//           />
//           <div className="flex flex-row">
//             <p className="text-small mr-20">Nome Usuário</p>
//             <p className="text-tiny text-default-500">{props.date}</p>
//           </div>
//         </CardHeader>
//         <Divider />
//         <CardBody>
//           <p className="text-sm">{props.comment}</p>
//         </CardBody>
//       </Card>
//     </>
//   );
// }
