import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children, testUser }) => {
  const [user, setUser] = useState({ ...testUser });
  //user from server is this obj: {id: x, email: xxx}

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUser can only be used on a descendant element of the Provider'
    );
  }

  return context;
};

export { UserProvider, useUser };
