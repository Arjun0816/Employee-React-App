import React, {
  createContext,
} from "react";

export const UserContext =
  createContext();

function UserProvider(
  { children }
) {

  const user = "Arjun";

  return (

    <UserContext.Provider
      value={user}
    >

      {children}

    </UserContext.Provider>

  );
}

export default UserProvider;