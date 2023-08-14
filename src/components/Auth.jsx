import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getHashInfoFromURL, loginURL } from "../queries/spotify";

const Auth = ({ colors }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storeToken = window.localStorage.getItem("token");
    const hash = getHashInfoFromURL()

    if (!storeToken && hash) {
      const _token = hash?.access_token
      window.location.hash = "";
      window.localStorage.setItem("token", _token);
      setToken(_token);
    }

    if (!token && storeToken) {
      setToken(storeToken);
    }
  }, [token]);

  const logoutHandler = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      {!token ? (
        <Button
          href={loginURL}
          sx={{ color: colors.typography.main[500] }}
        >
          Login
        </Button>
      ) : (
        <Button
          sx={{ color: colors.typography.main[500] }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default Auth;
