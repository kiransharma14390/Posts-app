import React, { useState } from "react";
import "./App.css";
import List from "././components/List";
import Post from "././components/Post";
import User from "././components/User";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function App() {
  const [active, setActive] = useState("firstComponent");
  const [
    searchActive,
    setSearchActive,
    users,
    setUsers,
    usernames,
    setUsernames,
    searchedName,
    setsearchedName
  ] = useState();

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => {
      setUsers(data);

    });
    const u=()=>{
        users.map(user=>(
        usernames=user.name,
        setUsernames(usernames)))
        console.log(userames)
    }
  return (
    <div>
      <div className="App">
        <header
          className="App-header"
          style={{
            backgroundColor: "skyblue",
            padding: "15px",
            fontSize: "30px"
          }}
        >
          <p>Welcome To Posts Dashboard</p>
        </header>
        <nav className="nav">
        {u}
          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={usernames != null ? usernames : ""}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            />
          </div>

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
      {active === "searchComponent" && <User searchedName={searchedName} />}
    </div>
  );
}
const handleOnSelect = item => {
  // the item selected
  console.log(item);
};

const handleOnFocus = () => {
  console.log("Focused");
};
const handleOnSearch = () => {};
