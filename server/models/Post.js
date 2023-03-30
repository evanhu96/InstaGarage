const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  post: {
    type:String
  },
  description: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
  },
  price: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
  profilePic:{
    type:String
  }
});
const Post = model("post", postSchema);
module.exports = Post;
