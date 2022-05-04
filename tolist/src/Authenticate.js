import React from "react";
import { Redirect, Route } from "react-router-dom";

const Authenticate = ({ Cmp, ...rest }) =>
  localStorage.getItem("loggedUsed") ? (
    <Redirect to="/Home" />
  ) : (
    <Route component={Cmp} {...rest} />
  );
export default Authenticate;
