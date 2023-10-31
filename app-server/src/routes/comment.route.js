// // src/routes/comment.route.js

const CommentModel = require("../models/comments/comment.model");

// app.post("/comments", async (req, res) => {
//   try {
//    const comment = await CommentModel.create(req.body) ;

//     console.log("entrou");
//     // Format Date
//     // const date = new Date();

//     // const minutes = date.getMinutes();
//     // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

//     // const formattedDate = `${date.getDate()}/${
//     //   date.getMonth() + 1
//     // }/${date.getFullYear()} ${date.getHours()}:${formattedMinutes}.${date.getSeconds()}s`;

//     // comment.date = formattedDate;
//     // console.log(formattedDate);

//     return comment === null
//       ? res.status(400).json(null)
//       : res.status(201).json(comment);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// async function routes(fastify, options) {
//   fastify.get("/comments", async (request, reply) => {
//     return { hello: "world" };
//   });
//}
async function routes(fastify, options) {
  fastify.post("/comments", { CommentModel }, async (request, reply) => {
    try {
      const comment = await CommentModel.create(request.body);

      return comment === null
        ? reply.code(400).send("Bad Request")
        : reply.code(201).send(comment);
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = routes;
