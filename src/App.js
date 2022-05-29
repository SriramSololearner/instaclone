import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import "./App.css";
import PostView from "./PostView/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PostView />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/post/add" element={<AddPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
