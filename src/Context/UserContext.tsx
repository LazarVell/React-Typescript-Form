import React, { createContext, FC, useState } from "react";

export interface UserInfo {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
}

export interface UserContextType {
  user: UserInfo | null;
  updateUser: (user: UserInfo) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  updateUser: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const updateUser = (newUser: UserInfo) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
