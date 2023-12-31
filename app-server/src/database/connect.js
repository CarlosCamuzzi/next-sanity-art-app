// src/database/connect.js
const moongose = require("mongoose");

async function connectToDatabase() {
  await moongose
    .connect("mongodb://127.0.0.1:27017/post-arts-app")
    .then(() => console.log("Database is connected!"))
    .catch((error) => console.log(`Database connection error: ${error}`));
}

module.exports = connectToDatabase;
