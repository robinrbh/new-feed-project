import React from "react";
import PostButton from "./PostButton";
import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img src={props.imgsrc} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>something</p>
      <PostButton title="Like" />
    </div>
  );
}
