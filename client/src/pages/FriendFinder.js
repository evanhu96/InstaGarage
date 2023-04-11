import { useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { FaPlus } from "react-icons/fa";

function FriendFinder() {
  const { loading, data, error } = useQuery(QUERY_USERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [friendList, setFriendList] = useState([]);
  if (data && !friendList.length) {
    console.log(data);
    setFriendList(data.users.map((user) => user.username));
  }
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  var filteredFriends;
  if (searchQuery) {
    filteredFriends = friendList.filter((friend) =>
      friend.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <Container className="my-4">
      <h2>Find Friends</h2>
      <Form className="my-4">
        <Form.Group controlId="searchQuery">
          <Form.Control
            type="text"
            placeholder="Search for friends"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Form.Group>
      </Form>
      <ListGroup>
        {filteredFriends &&
          filteredFriends.map((friend) => (
            <ListGroup.Item key={friend}>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{friend}</span>
                <Button>
                  <FaPlus />
                </Button>
              </span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
}

export default FriendFinder;
