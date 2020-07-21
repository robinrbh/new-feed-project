import React, { useState } from "react";


export default function PostButton(props) {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  return (
    <div>
      <p>
        <span style={{ cursor: "pointer" }} onClick={increment}>
          &#10084;&#65039;
        </span> {numLikes} likes
      </p>
    </div>
  );
}
