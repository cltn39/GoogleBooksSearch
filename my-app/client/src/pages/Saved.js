import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Containerbox from "../components/Containerbox";
import API from "../utils/API";
import FunctionBtn from "../components/FunctionBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Containerbox>
              <h1>Saved Books</h1>
              <br/>
              <br/>
            {this.state.savedBooks.length ? (
              <List>
                {this.state.savedBooks.map(book => (
                  <ListItem key={book._id}>
                    <FunctionBtn >Function</FunctionBtn><FunctionBtn>View</FunctionBtn>
                    <a href={"/books/" + book._id}>
                      <h4>{book.title}</h4>
                    </a>
                      <h5>{book.author || book.authors}</h5>
                      <img src={book.image || "https://place-hold.it/100x100"} alt="img" style= {{float: "left", height: "100px", width: "100px", margin: "15px"}}/>
                      <h6>{book.synopsis || book.description}</h6> 
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Containerbox>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
