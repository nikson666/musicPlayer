import {
  meEndpoint,
  myPlaylitsEndpoint,
  myLikedTracksEndpoint,
} from "./spotify";

export const getMe = async (token) => {
  try {
    const res = await fetch(meEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    return await res.json();
  } catch (rejectedValueOrSerializedError) {
    // this do not catch bugs why????

    console.error(rejectedValueOrSerializedError);
  }
};

export const getMyPlaylists = async (token) => {
  const res = await fetch(myPlaylitsEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  return await res.json();
};

export const getMyLikedTracks = async (token) => {
  const res = await fetch(myLikedTracksEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  return await res.json();
};
