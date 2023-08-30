import React, { useEffect } from "react";
import { getMyPlaylistsThunk } from "../redux/myPlaylists/operation";
import { useDispatch, useSelector } from "react-redux";
import myPlaylistsSelectors from "../redux/myPlaylists/selectors";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ListOfMyPlalists = () => {
  const defaultPlaylistImg =
    "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2020/01/spotify-logo.jpg";
  const dispatch = useDispatch();
  const playlists = useSelector(
    myPlaylistsSelectors.getMyPlaylistsItemsSelector
  );

  useEffect(() => {
    try {
      dispatch(getMyPlaylistsThunk());
    } catch (error) {
      console.error(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="caption" children="My Playlists" />
      <Grid
        display="grid"
        justifyContent="space-evenly"
        alignItems="center"
        gridTemplateColumns="repeat( auto-fill, 15em )"
        gap={2}
      >
        {playlists?.map((item) => {
          const image = item.images?.[0]?.url;
          return (
            <Card key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={image ? image : defaultPlaylistImg}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListOfMyPlalists;
