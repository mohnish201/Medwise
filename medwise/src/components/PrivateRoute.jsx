import React from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Toast, useToast } from "@chakra-ui/react";
function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContext);
  const toast = useToast();

  if (!auth.isAuth) {
    toast({
      title: "Sign in First",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
