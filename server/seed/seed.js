const connection = require("../config/connection");
const { Post } = require("../models");
const { Profile } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { UploadModel } = require("../models");
connection.on("error", (err) => console.log(err));

connection.once("open", async () => {
  await Post.deleteMany({});
  await Profile.deleteMany({});
  await User.deleteMany({});
  await Comment.deleteMany({});

  for (var i = 0; i < 10; i++) {
    const user = await User.create({
      username: "user" + i,
      password: "password" + i,
      email: "email" + i,
    });
    const profile = await Profile.create({
      username: "user" + i,
      description: `Hello, I'm user${i} and this is my unique description.`,
      bio: "bio" + i,
      profilePic: "profilePic" + i,
    });

  }

  console.log("succesa");
});
