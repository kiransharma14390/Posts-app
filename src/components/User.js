import React, { useState } from "react";
import "../App.css";

export default function User(userId) {
  const [user, setUser] = useState(null);

  fetch(`https://jsonplaceholder.typicode.com/users/` + userId)
    .then(response => response.json())
    .then(user => {
      //console.log(user);
      setUser(user);
    });

  return (
    <div className="container">
      <div className="jumbotron-div col s12">
        <ul className="collection">
          <div>
            <li>Username : {user && userId  !== null ? user.username : ''}</li>
            <li>Full name : {user && userId  !== null ? user.name : ''}</li>
            <li>Email : {user && userId   !== null ? user.email : ''}</li>
            <li>Website : {user && userId !== null ? user.website : ''}</li>
            <li>
              Company Details : {user && userId  !== null ? user.company.name : ''} +{" \t"}
              {user && userId !== null ? user.company.catchPhrase : ''}+{"/t"} +{user && userId !== null ? user.company.bs : ''}
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
