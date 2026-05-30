import React from "react";

function EmployeeCard(props) {

  return (
    <div>

      <h2>{props.name}</h2>

      <p>{props.role}</p>

      <p>{props.salary}</p>

    </div>
  );
}

export default EmployeeCard;