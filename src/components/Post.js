import React, { useState } from "react";
import "../App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import User from "./User";
import Button from "react-bootstrap";

export default function Post({userId, post}) {
  const [users, setUsers] = useState();
  const [comments, setComments] = useState();

  var username;

  fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + post.postId)
    .then(response => response.json())
    .then(data => {
      setComments(data)
    });
  fetch(`https://jsonplaceholder.typicode.com/users/` + userId)
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      username = data.username;
    });

  return (
    <div className="container">
      <div className="jumbotron-div col s12">
        <ul className="collection">
          {
            <div>
              <li> Post : {post ? post.title:''}</li>
              <li> Username : {username}</li>
              <h2>Post Comments</h2>

              {comments &&
                comments
                  .filter(comment => comment.postId === post.postId)
                  .map(comment => (
                    <div>
                        <li> Subject of Comment : {comment.name}</li>
                        <li> Body : {comment.body}</li>
                        <li> Email : {comment.email}</li>
                      </div>
                    
                  ))}
            </div>
          }
        </ul>
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
function goBack() {
  window.history.back();
}
