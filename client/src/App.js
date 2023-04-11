import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import InstaCard from "./components/InstaCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Stack } from "react-bootstrap";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Post from "./pages/Post";
import FriendFinder from "./pages/FriendFinder";
import FriendList from "./pages/FriendList";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3001/graphql",
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col md={3}>
              <Navigation />
            </Col>
            <Col
              md={9}
              className="d-flex justify-content-center align-items-center"
            >
              <Routes>
                <Route path="/" element={<Timeline />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/post" element={<Post />} />
                <Route path="/addFriend" element={<FriendFinder />} />
                <Route path="/friendList" element={<FriendList />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
