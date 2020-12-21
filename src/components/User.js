import React, { useState } from "react";
import "../App.css";

export default function User(userId) {
  const [users, setUsers] = useState(null);

  fetch(`https://jsonplaceholder.typicode.com/users/` + 1)
    .then(response => response.json())
    .then(data => {
      setUsers(data);
    });

  return (
    <div className="container">
      <div className="jumbotron-div col s12">
        <ul className="collection">
          {users &&
            users.map(user => (
              <div>
                <div
                  key={user.id}
                  className="collection-item left-align red lighten-3"
                />
                <li>Username : {user.username}</li>
                <li>Full name : {user.name}</li>
                <li>Email : {user.email}</li>
                <li>Website : {user.website}</li>
                <li>
                  Company Details : {user.company.name} +{" \t"}
                  {user.company.catchPhrase}+{"/t"} +{user.company.bs}
                </li>
              </div>
            ))}
        </ul>
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
function goBack() {
  window.history.back();
}
