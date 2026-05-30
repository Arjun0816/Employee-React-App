import React from "react";
import { useEffect, useState } from "react";

function Day11Loading() {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )

      .then((res) =>
        res.json()
      )

      .then((data) => {

        setUsers(data);

        setLoading(false);

      })

      .catch(() => {

        setError("Error loading data");

        setLoading(false);

      });

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>

      <h1>Users</h1>

      {users.map((user) => (

        <div key={user.id}>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

        </div>

      ))}

    </div>
  );
}

export default Day11Loading;