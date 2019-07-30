import React from "react";

function Containerbox({ children }) {
  return (
    <div
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Containerbox;