import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

export function FunctionBtn(props) {
  return (
    <button className="btn btn-primary" onClick={props.handleButton} {...props} tabIndex="0">
      {props.children}
    </button>
  );
}

export function ViewBtn(props) {
  return (
    <button className="btn btn-primary" onClick={props.handleButton} {...props} tabIndex="0">
      {props.children}
    </button>
  );
}