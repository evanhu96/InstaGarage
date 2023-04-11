import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../utils/auth";
import { UPLOAD_FILE } from "../utils/mutations";
function InstagramForm() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [uploadPost, { error: uploadError }] = useMutation(UPLOAD_FILE);
  if (uploadError) {
    console.log(uploadError);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var user;
    if (Auth.loggedIn()) {
      user = Auth.getProfile().data.username;
     console.log(image)
      uploadPost({
        variables: { file: image },
      }).catch((err) => {
        console.log(err);
      });
    } else {
      window.alert("You must be logged in.");
    }

    // Submit the form data to your server or do something else with it
    // createPost({ variables: {post:image,description: caption} });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      {" "}
      <Container className="m-4 p-4">
        <h2>Create an InstaGarage post</h2>
        <Row>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="caption">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter caption"
                />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <h4>Preview</h4>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Instagram post"
                className="img-fluid"
              />
            )}
            <div className="mt-2">
              {caption && (
                <p className="mb-0">
                  <strong>{caption}</strong>
                </p>
              )}
              {location && <p className="mb-0">{location}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InstagramForm;
