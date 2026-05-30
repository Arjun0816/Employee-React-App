import React from "react";
import { useState } from "react";

function Day13Forms() {

  const [name, setName] =
    useState("");

  const [role, setRole] =
    useState("");

  const [salary, setSalary] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    alert(
      name +
      " | " +
      role +
      " | " +
      salary
    );

    setName("");
    setRole("");
    setSalary("");
  }

  return (
    <div>

      <h1>
        Employee Form
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e)=>
            setRole(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e)=>
            setSalary(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button>
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default Day13Forms;