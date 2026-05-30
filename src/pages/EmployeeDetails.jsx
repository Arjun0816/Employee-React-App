import React from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {

  const { id } = useParams();

  return (
    <div>

      <h1>
        Employee ID: {id}
      </h1>

    </div>
  );
}

export default EmployeeDetails;