const { gql, GraphQLScalarType, Kind } = require("apollo-server-express");
const typeDefs = gql`
  scalar Date
  scalar Upload

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Post {
    _id: ID
    post: String
    description: String
    username: String
    date: Date
    likes: Int
    profilePic: String
    comments: [Comment]

  }
  type Comment {
    _id: ID
    post: String
    comment: String
    username: String
    date: Date
    likes: Int
  }
  type Reply {
    _id: ID
    comment: ID
    reply: String
    username: String
    date: Date
    likes: Int
  }
type Profile {
  _id: ID
  username: String
  email: String
  description: String
  profilePic: String
  posts:[Post]
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    profile(username: String!): Profile
    posts: [Post]
    post(_id: ID!): Post
    comments(post: ID!): [Comment]
    replies(comment: ID!): [Reply]
  }
  type Mutation {
    addUser(username: String, password: String, email: String): Auth
    login(username: String!, password: String!): Auth

    createPost(
      post: String!
      description: String
      username: String!
    ): Post

    createComment(
      post: String
      comment: String
      username: String
      date: Date

    ): Comment

    createReply(
      comment: ID
      reply: String
      user: String
      date: Date
      
    ): Reply

    updateProfile(
      username: String
      email: String
      description: String
      profilePic: String

    ): Profile

    updatePost(
      _id: ID
      post: String
      description: String
      user: String
      date: Date
      likes: Int
    ): Post

    updateComment(
      _id: ID
      post: ID
      comment: String
      user: String
      date: Date
      likes: Int
    ): Comment

    updateReply(
      _id: ID
      comment: ID
      reply: String
      user: String
      date: Date
      likes: Int
    ): Reply

    deleteProfile(_id: ID): Profile
    deletePost(_id: ID): Post
    deleteComment(_id: ID): Comment
    deleteReply(_id: ID): Reply
  }
`;

module.exports = typeDefs;
