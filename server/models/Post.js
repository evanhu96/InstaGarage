const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  post: {
    type: String,
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
  likeCount: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  profilePic: {
    type: String,
  },
});

postSchema.pre("save", function (next) {
  // Get the current number of posts
  const numLikes = this.likes ? this.likes.length : 0;

  // Update the "postCount" property
  this.likeCount = numLikes;

  next();
});
const Post = model("post", postSchema);
module.exports = Post;
