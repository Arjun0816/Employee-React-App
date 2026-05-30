import React from "react";

import useCounter
from "../hooks/useCounter";

function Day23CustomHook() {

  const {
    count,
    increment,
  } = useCounter();

  return (
    <div>

      <h1>
        Count: {count}
      </h1>

      <button
        onClick={
          increment
        }
      >
        Increment
      </button>

    </div>
  );
}

export default Day23CustomHook;