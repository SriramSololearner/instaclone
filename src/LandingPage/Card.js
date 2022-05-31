import React from "react";

export default function Card({ obj }) {
  // console.log(obj);
  const { name, location, likes, description, PostImage, date } = obj;

  return (
    <div className="card">
      <div className="head">
        <div className="name" style={{ marginTop: "8px" }}>
          <h3>{name}</h3>
          <p style={{ paddingBottom: "7px" }}>{location}</p>
        </div>
        <div className="more">...</div>
      </div>

      <div style={{ width: "100%", height: "60%" }}>
        <img
          src={ "https://cool-rolypoly-e4cfb9.netlify.app/image/" + PostImage}
          alt="img"
          className="post-img"
        />
      </div>

      <div className="foot">
        <div>
          <span>{"\u2661"}</span>
          <span>
            <img style={{width:"20px" , height:"20px"}}src={'https://cdn-icons-png.flaticon.com/128/2526/2526496.png'} alt="shareImg" />
          </span>
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="like-content">
        <p style={{ fontWeight: "bold" }}>{likes} likes</p>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}
