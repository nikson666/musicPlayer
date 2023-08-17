import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../redux/auth/selectors";
import profileSelectors from "../redux/profile/selectors";
import { getMeThunk } from "../redux/profile/operations";

const Profile = () => {
  const isAuth = useSelector(authSelectors.getIsAuthSelector);
  const token = useSelector(authSelectors.getAuthTokenSelector);
  const name = useSelector(profileSelectors.getNameSelector)
  const largeImage = useSelector(profileSelectors.getLargeImageSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try{
        dispatch(getMeThunk(token))
      } catch(rejectedValueOrSerializedError) {
        // this do not catch bugs why????
        console.error(rejectedValueOrSerializedError)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return isAuth ? (
    <Box
      sx={{
        mt: 5,
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: `300px`,
          height: `300px`,
        }}
        src={largeImage}
        alt="img"
      />
      <Typography variant="h3">{name}</Typography>
    </Box>
  ) : null;
};

export default Profile;
