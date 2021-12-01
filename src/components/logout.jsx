import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/login-action";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction(login.email));
  }, []);
  const login = useSelector((state) => state.login);
  return (
    <div className="container mt-5">
      <Typography variant="h4">Logged out successfully!</Typography>
    </div>
  );
};

export default Logout;
