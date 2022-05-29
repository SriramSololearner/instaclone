import React from "react";
import camera from "../Mock-data/camera.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>InstaClone</h1>
        </Link>

        <Link to="/post/add">
          <img
            src={camera}
            alt="camera"
            width="35px"
            height="35px"
            className="camera"
          />
        </Link>
      </nav>
      <hr />
    </>
  );
}
