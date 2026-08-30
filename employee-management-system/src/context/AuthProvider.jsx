import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = getLocalStorage();

    // If localStorage is empty, create the initial data
    if (!storedData?.employees || !storedData?.admin) {
      setLocalStorage();

      const initialData = getLocalStorage();

      setUserData({
        employees: initialData.employees || [],
        admin: initialData.admin || [],
      });

      return;
    }

    // If data already exists, use the existing localStorage data
    setUserData({
      employees: storedData.employees || [],
      admin: storedData.admin || [],
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
