import { meEndpoint } from "./spotify";

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
  const res = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  })
  return await res.json()
}
