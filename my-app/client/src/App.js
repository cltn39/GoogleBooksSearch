import React from "react";
import Books from "./pages/Books";
// import Saved from "./pages/Saved";
// import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Books />
      {/* <Saved />
      <Search /> */}
    </div>
  );
}

export default App;
