import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FunctionBtn(props) {
  return (
    <button className="delete-btn btn btn-primary" onClick={(event) => props.handleButton(event)} {...props} tabIndex="0">
      {props.children}
    </button>
  );
}

export default FunctionBtn;