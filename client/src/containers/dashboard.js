import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../components/spinner";
import TopTracks from "components/dashboard/top-tracks";
import TopArtists from "components/dashboard/top-artists";
import { logout, getAccessToken } from "../actions/auth";
import { getAuthCode } from "../utils/userAuth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authCode = getAuthCode(window.location);
    if (authCode) {
      window.history.pushState({}, null, "dashboard"); // clears the query code from url
      dispatch(getAccessToken(authCode));
    }

    setLoading(false);
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    push("/login");
  };

  if (loading) return <Spinner />;

  return (
    <div className="main">
      <TopTracks />
      <TopArtists />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
