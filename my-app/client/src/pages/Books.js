import React, { Component } from "react";
import { Jumbotron, Header } from "../components/Jumbotron";
import Containerbox from "../components/Containerbox";
import API from "../utils/API";
import { FunctionBtn, ViewBtn } from "../components/FunctionBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { SearchForm } from "../components/Form";

class Books extends Component {
  state = {
    search: "",
    searchBooks: [],
    savedBooks: [],
    error: "",
    message: ""
  };

  handleInputChage = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        console.log(res.data);
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          let results = res.data.items;
          results = results.map(result => {
            result = {
              // key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            };
            return result;
          });
          this.setState({ searchBooks: results, error: "" });
          console.log(this.state.searchBooks);
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.searchBooks.filter(
      book => book.id === event.target.id
    );
    console.log(event.target.id);
    console.log("log for savedBooks :" + savedBooks);
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err));
  };

  handleViewButton = event => {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Header>
              <h1 className="display-3">
                <span style={{ color: "royalblue" }}>G</span>
                <span style={{ color: "tomato" }}>o</span>
                <span style={{ color: "orange" }}>o</span>
                <span style={{ color: "royalblue" }}>g</span>
                <span style={{ color: "seagreen" }}>l</span>
                <span style={{ color: "tomato" }}>e </span>
                 Books Search
              </h1>
              <p className="lead mb-0">Search Books of Interest</p>
            </Header>
          </Col>
          <Col size="md-12 sm-12">
            <Containerbox>
              <Row>
                <Col size="12">
                  <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChage}
                  />
                </Col>
              </Row>
            </Containerbox>
          </Col>
          <Col size="md-12 sm-12">
            <Containerbox>
              <h1>Results</h1>
              <br />
              {this.state.searchBooks.length ? (
                <List>
                  {this.state.searchBooks.map(book => (
                    <ListItem key={book.id}>
                      <a href={book.link} target="_blank">
                        <ViewBtn onClick={this.handleViewButton}>View</ViewBtn>
                      </a>
                      <FunctionBtn
                        id={book.id}
                        onClick={this.handleSavedButton}
                      >
                        Save
                      </FunctionBtn>
                      <a href={"/books/" + book._id}>
                        <h4>{book.title}</h4>
                      </a>
                      <h5>{book.author || book.authors}</h5>
                      <img
                        src={book.image || "https://place-hold.it/100x100"}
                        alt="img"
                        style={{
                          float: "left",
                          height: "100px",
                          width: "100px",
                          margin: "15px"
                        }}
                      />
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

export default Books;
