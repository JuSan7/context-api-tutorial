import React from "react";
import { useUserContext } from "../context/useContext";
import Home from "./Home";
import LoginForm from "./LoginForm";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? <LoginForm /> : <Home />}</>;
};

export default Auth;
