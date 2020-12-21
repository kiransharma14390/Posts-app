import React, { useState } from "react";
import "./App.css";
import List from "././components/List";
import Post from "././components/Post";
import User from "././components/User";

export default function App() {
  const [active, setActive] = useState("firstComponent");

  return (
    <div>
      <div className="App">
        <header
          className="App-header"
          style={{
            backgroundColor: "skyblue",
            padding: "15px",
            fontSize: "20px"
          }}
        >
          <p>Welcome To Posts Dashboard</p>
        </header>
        <nav className="nav">
          <button onClick={() => setActive("firstComponent")}>
            List of Posts
          </button>
          <button onClick={() => setActive("secondComponent")}>
            Post Preview
          </button>
          <button onClick={() => setActive("thirdComponent")}>
            User Preview
          </button>
        </nav>
      </div>
      {active === "firstComponent" && <List />}
      {active === "secondComponent" && <Post />}
      {active === "thirdComponent" && <User />}
    </div>
  );
}
