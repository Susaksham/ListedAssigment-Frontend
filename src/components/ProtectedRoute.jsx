import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const ProtectedRoute = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  if (user) {
    return <>{props.children}</>;
  }
  return <Navigate to="/">{props.children}</Navigate>;
};

export default ProtectedRoute;
