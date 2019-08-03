import React from "react";
import "./style.css";

export function Jumbotron({ children }) {
  return <div className="jumbotron">{children}</div>;
}

export function Header({ children }) {
  return (
    <header>
    <div className="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
    </video>
    <div className="container h-100">
      <div className="d-flex h-100 text-center align-items-center">
        <div className="w-100 text-white">
          {children}
        </div>
      </div>
    </div>
  </header>
)
}  // <div className="jumbotron Header">{children}</div>;