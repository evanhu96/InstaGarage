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
  },
  posts: {
    type: Array,
  },
  profilePic: {
    type: String,
  },
});

const Profile = model("profile", profileSchema);
module.exports = Profile;
