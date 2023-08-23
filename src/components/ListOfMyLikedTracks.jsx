import React, { useEffect } from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikedTracksThunk } from "../redux/myLikedTracks/operations";
import mylikedTracksSelectors from "../redux/myLikedTracks/selectors";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  backdropFilter: "brightness(0.7)",
  borderRadius: 20,
}));

const ListOfMyLikedTracks = () => {
  const dispatch = useDispatch();
  const myLikedTracks = useSelector(
    mylikedTracksSelectors.getMylikedTracksSelector
  );

  useEffect(() => {
    dispatch(getMyLikedTracksThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Demo>
      <List dense={true}>
        {myLikedTracks?.map((item) => {
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
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src={image} alt="img" />
                </ListItemAvatar>
                <ListItemText  primary={item?.name} secondary={artists} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Demo>
  );
};

export default ListOfMyLikedTracks;
