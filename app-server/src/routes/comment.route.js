// // src/routes/comment.route.js
const CommentModel = require("../models/comments/comment.model");

async function routes(fastify, options) {
  fastify.post("/comments", { CommentModel }, async (request, reply) => {
    try {
      const comment = await CommentModel.create(request.body);
      console.log(comment);

      return comment === null
        ? reply.code(400).send("Bad Request")
        : reply.code(201).send(comment);
    } catch (error) {
      console.log(error);
    }
  });

  fastify.get("/comments/:id", { CommentModel }, async (request, reply) => {
    try {
      const { id } = request.params;

      const comment = await CommentModel.find({
        artId: id,
      }).sort({ date: -1 });
      console.log(comment);

      return comment === null
        ? reply.code(404).send("Not Found")
        : reply.code(200).send(comment);
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = routes;
