import React from "react";

import { Link }
from "react-router-dom";

function Employees() {

  return (
    <div>

      <h1>
        Employees Page
      </h1>

      <Link to="/employee/1">
        Arjun
      </Link>

      <br />

      <Link to="/employee/2">
        Rahul
      </Link>

      <br />

      <Link to="/employee/3">
        Kiran
      </Link>

    </div>
  );
}

export default Employees;