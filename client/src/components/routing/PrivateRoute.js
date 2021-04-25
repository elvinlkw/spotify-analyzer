import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !loading && !isLoggedIn ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
