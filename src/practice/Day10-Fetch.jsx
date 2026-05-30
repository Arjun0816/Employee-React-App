import React from "react";
import { useEffect, useState } from "react";

function Day10Fetch() {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {

    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((res) =>
        res.json()
      )

      .then((data) => {
        setUsers(data);
      });

  }, []);

  return (
    <div>

      <h1>Users List</h1>

      {users.map((user) => (

        <div key={user.id}>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

        </div>

      ))}

    </div>
  );
}

export default Day10Fetch;