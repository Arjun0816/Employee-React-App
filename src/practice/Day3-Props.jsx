function Employee({ name, role }) {
  return (
    <div>
      <h1>{name}</h1>

      <p>{role}</p>

      <button>
        Hire Me
      </button>
    </div>
  );
}

function Day3Props() {
  return (
    <div>

      <Employee
        name="Arjun"
        role="React Developer"
      />

      <Employee
        name="Rahul"
        role="Python Developer"
      />

    </div>
  );
}

export default Day3Props;