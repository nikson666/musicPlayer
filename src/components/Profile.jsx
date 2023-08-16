import React, { useEffect, useState } from "react";
import { getMe } from "../queries/mediaQuery";
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/selectors";

const Profile = () => {
  const isAuth = useSelector(authSelectors.getIsAuthSelector);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storeToken = window.localStorage.getItem("token");
    if (storeToken) {
      getMe().then((res) => {
        setName(res?.display_name);
        setImages(res?.images);
      });
    }
  }, []);

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
          width: `${images[1]?.width}px`,
          height: `${images[1]?.height}px`,
        }}
        src={images[1]?.url}
        alt="img"
      />
      <Typography variant="h3">{name}</Typography>
    </Box>
  ) : null;
};

export default Profile;
