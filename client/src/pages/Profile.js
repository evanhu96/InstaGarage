import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../utils/queries";
import InstaCard from "../components/InstaCard";
const images = {};
function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}
importAll(require.context("../assets", false, /\.jpg$/));
function Profile() {
  const { loading, data, error } = useQuery(GET_PROFILE, {
    variables: { username: "keith" },
  });
  if (data) {
    console.log(data);
  }
  const numFriends = 500; // Replace with actual number of friends
  if (data) {
    return (
      <Container>
        <Row className="mt-4">
          <Col xs={4} sm={3}>
            <Image
              src={images[data.profile.profilePic]}
              alt="Profile Picture"
              roundedCircle
              style={{ width: "160px", height: "160px", marginRight: "20px" }}
            />
          </Col>
          <Col xs={8} sm={6}>
            <h1>{data.profile.username}</h1>
            <Button variant="outline-primary" size="sm">
              Edit Profile
            </Button>
            <Row className="mt-2">
              <Col>
                <strong>Posts</strong>
              </Col>
              <Col>
                <strong>{numFriends}</strong> Friends
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          {data.profile.posts.map((post, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={4}>
              <InstaCard
                key={post._id}
                imageSrc={post.post}
                caption={post.description}
                user={post.username}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Profile;
