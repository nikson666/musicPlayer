import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Auth = ({ colors }) => {
  const CLIENT_ID = "20b0581edb28461ba06c984b0647dd71";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINTMENT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const logoutHandler = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      {!token ? (
        <Button
          href={`${AUTH_ENDPOINTMENT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
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
