import React from "react";
import { useState } from "react";

function Day21Search() {

  const employees = [
    "Arjun",
    "Rahul",
    "Kiran",
    "Ravi",
    "Mahesh",
  ];

  const [search, setSearch] =
    useState("");

  const filteredEmployees =
    employees.filter(
      (employee) =>
        employee
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div>

      <h1>
        Employee Search
      </h1>

      <input
        placeholder="Search"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <br />
      <br />

      {filteredEmployees.map(
        (employee, index) => (

          <h2 key={index}>
            {employee}
          </h2>

        )
      )}

    </div>
  );
}

export default Day21Search;