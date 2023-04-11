import { gql } from "@apollo/client";


const QUERY_COMMENTS = gql`
query Query($post: ID!) {
  comments(post: $post) {
    _id
    post
    comment
    username
    date
  }
}
`;
const QUERY_USERS = gql`
  query Query {
    users {
      _id
      username
      email
    }
  }
`;
const QUERY_POSTS = gql`
query Query {
  posts {
    _id
    description
    post
    username
    date
    profilePic
    likes
    comments {
      _id
      comment
      username
      date
    }
  }
}
`;
const GET_PROFILE = gql`
query Query($username: String!) {
  profile(username: $username) {
    _id
    username
    email
    description
    profilePic
    posts {
      _id
      post
      description
      username
      date
    }
  }
}
`;


export { QUERY_POSTS,QUERY_USERS ,GET_PROFILE,QUERY_COMMENTS};