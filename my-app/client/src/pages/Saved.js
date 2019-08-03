import React, { Component } from "react";
import { Jumbotron, Header} from "../components/Jumbotron";
import Containerbox from "../components/Containerbox";
import API from "../utils/API";
import { FunctionBtn, ViewBtn } from "../components/FunctionBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.handleLoadBooks();
  }

  handleLoadBooks = () =>
  API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err => console.log(err))

  handleDeleteButton = id => {
    API.deleteBook(id)
    .then(res => this.componentDidMount())
    .catch(err => console.log(err))
  }

  handleViewButton = event => {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Header>
              <h1>(React) Google Books Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Header>
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
                    <FunctionBtn onClick={() => this.handleDeleteButton(book._id)} > Delete</FunctionBtn>
                    <a href={book.link} target="_blank">
                    <ViewBtn>View</ViewBtn>
                    </a>
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
              <List>
                  <ListItem>
                    <div className="article">
                      <h3>No Results to Display</h3>
                    </div>
                  </ListItem>
                </List>
            )}
            </Containerbox>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
