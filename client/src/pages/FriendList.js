import { useState } from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';

function FriendList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendList, setFriendList] = useState([
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
    'Grace',
    'Heidi',
    'Ivy',
    'Jack',
  ]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFriends = friendList.filter((friend) =>
    friend.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredFriends.map((friend) => (
          <ListGroup.Item key={friend}>{friend}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default FriendList;
