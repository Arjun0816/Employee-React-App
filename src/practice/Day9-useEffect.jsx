import React from "react";
import Day9UseEffect from "./practice/Day9-useEffect";

function App() {
  return <Day9UseEffect />;
}

export default App;

import React from "react";
import { useState, useEffect } from "react";

function Day9UseEffect() {

  const [count, setCount] =
    useState(0);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <div>

      <h1>{count}</h1>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increase
      </button>

    </div>
  );
}

export default Day9UseEffect;