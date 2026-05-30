import React from "react";

import {
  useState,
  useCallback,
} from "react";

function Day25UseCallback() {

  const [count, setCount] =
    useState(0);

  const increment =
    useCallback(() => {

      setCount(
        (oldCount) =>
          oldCount + 1
      );

    }, []);

  return (
    <div>

      <h1>
        Count: {count}
      </h1>

      <button
        onClick={increment}
      >
        Count +1
      </button>

    </div>
  );
}

export default Day25UseCallback;