import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, updateUser } = useContext(UserContext);
  if (!user || !updateUser) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return { user, updateUser };
};
