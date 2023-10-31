const Fastify = require("fastify");
const cors = require("@fastify/cors");

// Routes
const comments = require("../src/routes/comment.route");

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
});

fastify.listen({ port: 8080 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

fastify.register(comments);

module.exports = fastify;
