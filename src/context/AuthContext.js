import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  user: undefined,
  logOut: () => {},
  logOut: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  function logIn(data) {
    setAuth(data);
  }

  function logOut(data) {
    setAuth(undefined);
  }

  const valueContext = {
    auth,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
