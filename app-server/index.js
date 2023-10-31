// index.js
const connectToDatabase = require("./src/database/connect");

connectToDatabase();

require("./modules/fastify");
require("./src/routes/user.route");
require("./src/routes/comment.route");
