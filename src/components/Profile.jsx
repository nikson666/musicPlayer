import React, { useEffect, useState } from "react";
import { getMe } from "../queries/mediaQuery";
import { Avatar, Box, Typography } from "@mui/material";

const Profile = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  console.log("images", images);

  useEffect(() => {
    const storeToken = window.localStorage.getItem("token");
    if (storeToken) {
      getMe().then((res) => {
        setName(res?.display_name);
        setImages(res?.images);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        mt: 5,
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >  
      <Typography variant="h3">{name}</Typography>
      <Avatar sx={{width: `${images[1]?.width}px`, height: `${images[1]?.height}px`}} src={images[1]?.url} alt="img" />
    </Box>
  );
};

export default Profile;
