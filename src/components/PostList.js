import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post.js";

export default function PostList() {
	const [posts, set_Posts] = useState([]); // <-- initial state

	useEffect(() => {
		async function doSomeDataFetching() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get("http://my-json-server.typicode.com/robinrbh/new-feed-project/racetracks");
    
      set_Posts(res.data);
    } doSomeDataFetching();
	}, []);

	return (
		<div>
			{posts.map((post, number) => {
				return <Post imgsrc={post.imgsrc} title={post.title} description={post.description} />;
			})}
		</div>
	);
}
