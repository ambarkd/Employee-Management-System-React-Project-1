import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const AuthContext = ({ children }) => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);
  return <div>{children}</div>;
};

export default AuthContext;
