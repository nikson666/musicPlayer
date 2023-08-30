export const clienId = "20b0581edb28461ba06c984b0647dd71";
export const redirectUri = "http://localhost:3000/";

// Endpoints
export const authEndpoint = "http://accounts.spotify.com/authorize";
export const meEndpoint = "https://api.spotify.com/v1/me"
export const myPlaylitsEndpoint = "https://api.spotify.com/v1/me/playlists"
export const myLikedTracksEndpoint = "https://api.spotify.com/v1/me/tracks"


// Scopes
export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-library-read",
  "app-remote-control",
  "streaming",
  "playlist-read-private",
  "user-read-private",
  "user-read-email"
];

export const loginURL = `${authEndpoint}?client_id=${clienId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getHashInfoFromURL = () => {
  const hash = window.location.hash;
  if (hash) {
    return hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        const part = item.split("=");
        initial[part[0]] = decodeURIComponent(part[1]);

        return initial;
      }, {});
  }
};
