import React, { useEffect, useMemo } from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikedTracksThunk } from "../redux/myLikedTracks/operations";
import mylikedTracksSelectors from "../redux/myLikedTracks/selectors";
import { setTrackUris, setOffset, setPlayStatus } from "../redux/player/slice";

const Demo = styled("div")(() => ({
  backgroundColor: "transparent",
}));

const ListOfMyLikedTracks = () => {
  const dispatch = useDispatch();
  const myLikedTracks = useSelector(
    mylikedTracksSelectors.getMylikedTracksSelector
  );
  const trackUris = useMemo(
    () => myLikedTracks?.map((item) => item.uri),
    [myLikedTracks]
  );

  useEffect(() => {
    dispatch(getMyLikedTracksThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setTrackUris(trackUris));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackUris]);

  const selectedTrackHandler = (offset) => {
    dispatch(setPlayStatus(true));
    dispatch(setOffset(offset));
  };

  return (
    <Demo sx={{mb: 3}}>
      <Typography variant="caption" children="Liked" />
      <List dense={true}>
        {myLikedTracks?.map((item, index) => {
          const image = item?.album?.images?.[0]?.url;
          const artists = item?.artists
            ?.map((item) => {
              return item.name;
            })
            ?.toLocaleString();

          return (
            <ListItem
              key={item?.id}
              secondaryAction={
                <IconButton edge="end" aria-label="moreVert">
                  <MoreVertIcon />
                </IconButton>
              }
            >
              <ListItemButton onClick={() => selectedTrackHandler(index)}>
                <ListItemAvatar>
                  <Avatar src={image} alt="img" />
                </ListItemAvatar>
                <ListItemText primary={item?.name} secondary={artists} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Demo>
  );
};

export default ListOfMyLikedTracks;
