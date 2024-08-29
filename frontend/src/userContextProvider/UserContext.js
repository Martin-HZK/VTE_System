// src/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setGlobalUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setGlobalUsername }}>
      {children}
    </UserContext.Provider>
  );
};
