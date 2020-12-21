import React, { useState } from "react";
import "../App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import User from "./User";
import Post from "./Post";
import Button from "react-bootstrap";

export default function List() {
  const [active, setActive] = useState("firstComponent");
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();

  const fetchData = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    });

  return (
    <div className="container">
      <div className="jumbotron-div col s12">
        <ul className="collection">
          {posts &&
            posts.map(post => (
              <div>
                <div
                  key={post.id}
                  className="collection-item left-align red lighten-3"
                >
                  <a
                    style={{ marginBottom: "10px" }}
                    onClick={() => setActive("titleClicked")}
                  >
                    Title : {post.title}
                  </a>

                  {active === "titleClicked" && <Post userId={post.userId} post={post} />}
                  <div>
                    <button onClick={() => setActive("userIdClicked")}>
                      <p> Created By : {post.userId}</p>
                      {active === "userIdClicked" && (
                        <User userId={post.userId} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
