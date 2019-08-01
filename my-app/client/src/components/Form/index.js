import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <label for="title">Book Search</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      type="submit"
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label>
          <h3>Book Search</h3>
        </label>
        <br />
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Enter Book's Name"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="submitBtn btn btn-primary"
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </form>
  );
}
