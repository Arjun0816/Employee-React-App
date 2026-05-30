import React from "react";

function Day7Map() {

  const names = [
    "Arjun",
    "Rahul",
    "Kiran"
  ];

  return (
    <div>

      {names.map((name) => (
        <h2>{name}</h2>
      ))}

    </div>
  );
}

export default Day7Map;