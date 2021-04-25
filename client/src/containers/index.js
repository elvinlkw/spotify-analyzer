import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner";

const Index = () => {
  const { push } = useHistory();
  const token = JSON.parse(sessionStorage.getItem("token"))?.access_token;
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && isLoggedIn && token) {
      push("/dashboard");
    }
  }, [loading, isLoggedIn, token, push]);

  return <Spinner />;
};

export default Index;
