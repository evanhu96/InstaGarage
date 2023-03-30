const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: {
    type: String,
  },
  post:{
    type:String
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
  },
  likes: {
    type: Number,
  },
  replies: {
    type: Array,
  },
});
const Comment = model("comment", commentSchema);
module.exports = Comment;
//
