import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const AuthProvider = ({ children }) => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);
  return <div>{children}</div>;
};

export default AuthProvider;
