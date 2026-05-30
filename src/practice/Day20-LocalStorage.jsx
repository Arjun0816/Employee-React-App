import React from "react";
import {
  useState,
  useEffect,
} from "react";

function Day20LocalStorage() {

  const [name, setName] =
    useState("");

  useEffect(() => {

    const savedName =
      localStorage.getItem(
        "username"
      );

    if (savedName) {
      setName(savedName);
    }

  }, []);

  function saveName() {

    localStorage.setItem(
      "username",
      name
    );

    alert("Saved");
  }

  return (
    <div>

      <h1>
        LocalStorage Example
      </h1>

      <input
        value={name}
        placeholder="Enter Name"
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={saveName}
      >
        Save
      </button>

    </div>
  );
}

export default Day20LocalStorage;