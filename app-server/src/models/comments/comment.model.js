// src/models/users/comment.model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  artId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  avaliation: {
    type: Number,
    default: 0,
  },
});

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
