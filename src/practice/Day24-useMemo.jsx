import React from "react";

import {
  useState,
  useMemo,
} from "react";

function Day24UseMemo() {

  const [count, setCount] =
    useState(0);

  const [age, setAge] =
    useState(20);

  const doubleCount =
    useMemo(() => {

      console.log(
        "Calculating..."
      );

      return count * 2;

    }, [count]);

  return (
    <div>

      <h1>
        Count: {count}
      </h1>

      <h2>
        Double: {doubleCount}
      </h2>

      <button
        onClick={() =>
          setCount(
            count + 1
          )
        }
      >
        Count +1
      </button>

      <br />
      <br />

      <h1>
        Age: {age}
      </h1>

      <button
        onClick={() =>
          setAge(
            age + 1
          )
        }
      >
        Age +1
      </button>

    </div>
  );
}

export default Day24UseMemo;