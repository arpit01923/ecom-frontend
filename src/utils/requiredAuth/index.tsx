import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const RequiredAuth: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return <>{isLoggedIn ? children : navigate("/signin")}</>;
};

export default RequiredAuth;
