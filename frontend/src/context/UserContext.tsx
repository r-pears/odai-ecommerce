"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getUserFromToken } from "../hooks/useAuth";

interface UserContextType {
  user: { id: string; email: string } | null;
  setUser: (user: { id: string; email: string } | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  useEffect(() => {
    const loggedInUser = getUserFromToken(); // Decode the token to get user info
    setUser(loggedInUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};