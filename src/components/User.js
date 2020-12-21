import React, { useState } from "react";
import "../App.css";

export default function User(userId) {
  const [user, setUser] = useState(null);

  fetch(`https://jsonplaceholder.typicode.com/users/` + 1)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUser(data);
    });

  return (
    <div className="container">
      <div className="jumbotron-div col s12">
        <ul className="collection">
          <div>
            <li>Username : {user.username}</li>
            <li>Full name : {user.name}</li>
            <li>Email : {user.email}</li>
            <li>Website : {user.website}</li>
            <li>
              Company Details : {user.company.name} +{" \t"}
              {user.company.catchPhrase}+{"/t"} +{user.company.bs}
            </li>
          </div>
        </ul>
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
function goBack() {
  window.history.back();
}
