import React from "react";

function Day12CSS() {

  return (
    <div>

      <h1
        style={{
          color: "blue",
          fontSize: "30px"
        }}
      >
        Hello Arjun
      </h1>

    </div>
  );
}

export default Day12CSS;

import React from "react";
import "./Day12.css";

function Day12CSS() {

  return (
    <div>

      <h1 className="title">
        React CSS
      </h1>

      <button className="btn">
        Save
      </button>

    </div>
  );
}

export default Day12CSS;

import React from "react";

function Day12CSS() {

  const isActive = true;

  return (

    <div>

      <h1
        style={{
          color:
            isActive
              ? "green"
              : "red"
        }}
      >

        Status

      </h1>

    </div>
  );
}

export default Day12CSS;