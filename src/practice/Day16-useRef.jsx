import React from "react";
import { useRef } from "react";

function Day16UseRef() {

  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>

      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        placeholder="Enter Name"
      />

      <br />
      <br />

      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  );
}

export default Day16UseRef;
