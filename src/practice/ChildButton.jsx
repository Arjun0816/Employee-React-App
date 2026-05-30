import React from "react";

function ChildButton(props) {

  return (
    <div>

      <button
        onClick={props.sendMessage}
      >
        Send Message
      </button>

    </div>
  );
}

export default ChildButton;