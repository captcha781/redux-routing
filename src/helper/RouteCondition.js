import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteCondition = ({type, Component}) => {
  const auth = useSelector((state) => state.auth);

  if (auth.isAuth && type === "private") {
    return <Component />;
  } else if (auth.isAuth && type === "auth") {
    return <Navigate to={"/dashboard"} />;
  } else if (!auth.isAuth && type === "auth") {
    return <Component />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default RouteCondition;
