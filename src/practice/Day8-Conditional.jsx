import React from "react";
import { useState } from "react";

function Day8Conditional() {

  const [show, setShow] =
    useState(false);

  return (
    <div>

      <button
        onClick={() =>
          setShow(!show)
        }
      >
        Toggle
      </button>

      {show
        ? <h2>Hello Arjun</h2>
        : <h2>Hidden</h2>
      }

    </div>
  );
}

export default Day8Conditional;

import React from "react";

function Day8Conditional() {

  const isLoggedIn = true;

  return (
    <div>

      {isLoggedIn
        ? <h1>Welcome Arjun</h1>
        : <h1>Please Login</h1>
      }

    </div>
  );
}

export default Day8Conditional;