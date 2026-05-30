import React from "react";
import { useState } from "react";

function Day22CRUD() {

  const [name, setName] =
    useState("");

  const [employees, setEmployees] =
    useState([]);

  function addEmployee() {

    if (name === "") return;

    setEmployees([
      ...employees,
      name,
    ]);

    setName("");
  }

  function deleteEmployee(index) {

    const updatedEmployees =
      employees.filter(
        (_, i) =>
          i !== index
      );

    setEmployees(
      updatedEmployees
    );
  }

  return (
    <div>

      <h1>
        Employee CRUD
      </h1>

      <input
        value={name}
        placeholder="Enter Name"
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <button
        onClick={addEmployee}
      >
        Add
      </button>

      <hr />

      {employees.map(
        (employee, index) => (

          <div key={index}>

            <h2>
              {employee}
            </h2>

            <button
              onClick={() =>
                deleteEmployee(
                  index
                )
              }
            >
              Delete
            </button>

          </div>

        )
      )}

    </div>
  );
}

export default Day22CRUD;