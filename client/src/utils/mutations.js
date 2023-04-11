import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation Mutation($username: String!, $password: String!, $email: String) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const CREATE_POST = gql`
  mutation createPost(
    $post: String!
    $username: String!
    $description: String!
  ) {
    createPost(post: $post, username: $username, description: $description) {
      _id
      post
      description
      username
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation Mutation(
    $post: String
    $comment: String
    $username: String
    $date: Date
  ) {
    createComment(
      post: $post
      comment: $comment
      username: $username
      date: $date
    ) {
      _id
      post
      comment
      username
      date
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      file
    }
  }
`;
const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $updateProfileUsername2: String!
    $updateProfileEmail2: String!
    $updateProfileDescription2: String!
    $updateProfileProfilePic2: String
  ) {
    updateProfile(
      username: $updateProfileUsername2
      email: $updateProfileEmail2
      description: $updateProfileDescription2
      profilePic: $updateProfileProfilePic2
    ) {
      _id
      username
      email
      description
      profilePic
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost(
    $updatePostPost2: String!
    $id: ID!
    $updatePostDescription2: String!
    $updatePostUser2: ID!
    $updatePostDate2: String!
  ) {
    updatePost(
      post: $updatePostPost2
      _id: $id
      description: $updatePostDescription2
      user: $updatePostUser2
      date: $updatePostDate2
    ) {
      _id
      post
      description
      username
      date
      likes
    }
  }
`;

const UPDATE_COMMENT = gql`
  mutation updateComment(
    $updateCommentDate2: String!
    $updateCommentUser2: ID!
    $updateCommentComment2: String!
    $updateCommentPost2: ID!
    $updateCommentId2: ID!
  ) {
    updateComment(
      date: $updateCommentDate2
      user: $updateCommentUser2
      comment: $updateCommentComment2
      post: $updateCommentPost2
      _id: $updateCommentId2
    ) {
      likes
      date
      username
      comment
      post
      _id
    }
  }
`;
const UPDATE_LIKES = gql`
  mutation updateLikes($id: ID!, $likes: [String]!) {
    updateLikes(_id: $id, likes: $likes) {
      _id
    }
  }
`;
const DELETE_POST = gql`
  mutation deletePost($deletePostId2: ID!) {
    deletePost(_id: $deletePostId2) {
      _id
      post
      description
      username
      date
      likes
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation deleteComment($deleteCommentId2: ID!) {
    deleteComment(_id: $deleteCommentId2) {
      _id
      post
      comment
      username
      date
      likes
    }
  }
`;

export {
  ADD_USER,
  LOGIN,
  UPDATE_PROFILE,
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_POST,
  DELETE_COMMENT,
  UPDATE_POST,
  UPDATE_COMMENT,
  UPDATE_LIKES
};
