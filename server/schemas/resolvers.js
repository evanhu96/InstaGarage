const { User, Comment, Reply, Post, Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    posts: async (parent) => {
      const posts = await Post.find().sort({ date: -1 }).limit(20);
      const updatedPosts = [];
      
      for (const post of posts) {
        const profile = await Profile.findOne({ username: post.username });
        const comments = await Comment.find({ post: post._id });
        const updatedPost = post.toObject(); // convert to plain JavaScript object
        updatedPost.profilePic = profile ? profile.profilePic : null;
        updatedPost.comments = comments;
        updatedPosts.push(updatedPost);
      }
      console.log(updatedPosts);
      return updatedPosts;
    },

    post: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Post.findOne(params);
    },
    comments: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Comment.find(params);
    },
    replies: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Reply.find(params);
    },
    profile: async (parent, { username }) => {
      const params = username ? { username } : {};
      const posts = await Post.find(params);
      var profile = await Profile.findOne(params);
      profile.posts = posts;
      return profile;
    },
  },
  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      const user = await User.create({ username, password, email });
      const token = signToken(user);
      await Profile.create({
        username,
        email,
      });
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    createPost: async (parent, { post, description, username }) => {
      console.log();
      const newPost = await Post.create({
        post,
        description,
        username,
        date: Date.now(),
      });
      return newPost;
    },
    createComment: async (
      parent,
      { post, comment, username, date, likes, replies }
    ) => {

      console.log(post);
      const newComment = await Comment.create({
        post:post,
        comment:comment,
        username:username,
        date: Date.now(),
      });
      console.log(newComment);
      return newComment;
    },
    createReply: async (parent, { comment, reply, user, date, likes }) => {
      const newReply = await Reply.create({
        comment,
        reply,
        user,
        date: Date.now(),
      });
      return newReply;
    },
    updateProfile: async (
      parent,
      { username, email, posts, description, profilePic, friends }
    ) => {
      const updateProfile = await Profile.findOneAndUpdate(
        { username },
        { email, posts, description, profilePic, friends }
      );
      return updateProfile;
    },
    updatePost: async (
      parent,
      { _id, post, description, user, date, likes, comments }
    ) => {
      const updatePost = await Post.findOneAndUpdate(
        { _id },
        { post, description, user, date, likes, comments }
      );
      return updatePost;
    },
    updateComment: async (
      parent,
      { _id, post, comment, user, date, likes, replies }
    ) => {
      const updateComment = await Comment.findOneAndUpdate(
        { _id },
        { post, comment, user, date, likes, replies }
      );
      return updateComment;
    },
    updateReply: async (parent, { _id, comment, reply, user, date, likes }) => {
      const updateReply = await Reply.findOneAndUpdate(
        { _id },
        { comment, reply, user, date, likes }
      );
      return updateReply;
    },
    deleteProfile: async (parent, { id }) => {
      const deletedProfile = await Profile.findByIdAndDelete(id);
      return deletedProfile;
    },

    deletePost: async (parent, { id }) => {
      const deletedPost = await Post.findByIdAndDelete(id);
      return deletedPost;
    },
    deleteComment: async (parent, { id }) => {
      const deletedComment = await Comment.findByIdAndDelete(id);
      return deletedComment;
    },
    deleteReply: async (parent, { id }) => {
      const deletedReply = await Reply.findByIdAndDelete(id);
      return deletedReply;
    },
  },
};

module.exports = resolvers;
