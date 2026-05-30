import React from "react";
function Day1JSX() {
  const name = "Arjun";
  const skill = "React Developer";

  return (
    <div>
      <h1>{name}</h1>

      <p>{skill}</p>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Hire Me
      </button>
    </div>
  );
}

export default Day1JSX;