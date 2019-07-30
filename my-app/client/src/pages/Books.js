import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Containerbox from "../components/Containerbox";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
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
                <h3>Book Search</h3>
                <form>
                <Input name="title" placeholder="Harry Potter" />
                <FormBtn>Search</FormBtn>
                </form>
              </Containerbox>
          </Col>
          <Col size="md-12 sm-12">
            <Containerbox>
              <h1>Results</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <DeleteBtn >View</DeleteBtn><DeleteBtn>Save</DeleteBtn>
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

export default Books;
