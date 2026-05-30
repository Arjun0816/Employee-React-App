import React from "react";
import EmployeeCard from "./EmployeeCard";

function Day14Parent() {

  return (
    <div>

      <h1>
        Employees
      </h1>

      <EmployeeCard
        name="Arjun"
        role="Python Developer"
        salary="30000"
      />

      <EmployeeCard
        name="Rahul"
        role="React Developer"
        salary="35000"
      />

    </div>
  );
}

export default Day14Parent;