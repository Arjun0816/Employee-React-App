import React from "react";
import { useState } from "react";

import ChildButton
from "./ChildButton";

function Day15Parent() {

  const [message, setMessage] =
    useState("No message");

  function handleMessage() {

    setMessage(
      "Hello from Child"
    );
  }

  return (
    <div>

      <h1>{message}</h1>

      <ChildButton
        sendMessage={
          handleMessage
        }
      />

    </div>
  );
}

export default Day15Parent;