import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import Navbar from "./Navbar.js";

const LandingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fun() {
      let data1 = await fetch("https://instaclone-reactapp.herokuapp.com/posts");
      let data = await data1.json();
      console.log(data.user)
      setUsers([...data.user]);
    }              

    fun();
  }, []);

  return (
    <div className="site-container">
      <Navbar />
      <div className="container">
        {users.length
          ? users.map((obj, idx) => {
              return <Card key={"Sriram" + idx} obj={obj} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default LandingPage;
