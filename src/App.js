import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import PostList from "./components/PostList.js";
import SidebarButton from "./components/SidebarButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div class="posts-block">
          <PostList />
          {/* <Post
            imgsrc="https://farm5.staticflickr.com/4614/25116424037_4f940dafdf_c.jpg"
            title="PROPS TITLE"
            description="DESC"
          />
          <Post
            imgsrc="https://farm5.staticflickr.com/4614/25116424037_4f940dafdf_c.jpg"
            title="PROPS TITLE"
            description="DESC"
          />
          <Post
            imgsrc="https://farm5.staticflickr.com/4614/25116424037_4f940dafdf_c.jpg"
            title="PROPS TITLE"
            description="DESC"
          />
          <Post
            imgsrc="https://farm5.staticflickr.com/4614/25116424037_4f940dafdf_c.jpg"
            title="PROPS TITLE"
            description="DESC"
          /> */}
        </div>

        <div className="sidebar-block">
          <SidebarButton title="Signup!" />
          <SidebarButton title="Login!" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
