// src/routes/user.route.js
const app = require("../../modules/fastify");
const UserModel = require("../models/users/user.model");

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    console.log("entrou USER");

    return user === null
      ? res.status(400).json(null)
      : res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
