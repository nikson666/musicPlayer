import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { getHashInfoFromURL, loginURL } from "../queries/spotify";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setIaAuth } from "../redux/auth/slice";
import authSelectors from "../redux/auth/selectors";

const Auth = ({ colors }) => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getAuthTokenSelector)
  const isAuth = useSelector(authSelectors.getIsAuthSelector)

  useEffect(() => {
    const storeToken = window.localStorage.getItem("token");
    const hash = getHashInfoFromURL()

    if (!storeToken && hash) {
      const _token = hash?.access_token
      window.location.hash = "";
      window.localStorage.setItem("token", _token);
      dispatch(setToken(_token))
      dispatch(setIaAuth(true))
    }

    if (!token && storeToken) {
      dispatch(setToken(storeToken))
      dispatch(setIaAuth(true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    dispatch(setIaAuth(false))
    dispatch(setToken(''))
  };

  return (
    <>
      {!isAuth ? (
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
