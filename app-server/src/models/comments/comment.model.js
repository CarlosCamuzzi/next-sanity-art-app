// src/models/users/comment.model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  // userId: {
  //   type: String,
  //   required: true,
  // },
  // artId: {
  //   type: String,
  //   required: true,
  // },
  comment: {
    type: String,
    required: true,
  },
  // date: {
  //   type: Date,
  // },
});

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
