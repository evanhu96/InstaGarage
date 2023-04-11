const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  username: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  postCount: {
    type: Number,
    default: 0,
  },
  posts: {
    type: Array,
  },
  profilePic: {
    type: String,
  },
});
profileSchema.pre("save", function (next) {
  // Get the current number of posts
  const numPosts = this.posts ? this.posts.length : 0;
  
  // Update the "postCount" property
  this.postCount = numPosts;
  
  next();
});


const Profile = model("profile", profileSchema);
module.exports = Profile;
