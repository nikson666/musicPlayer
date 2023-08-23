import { createSlice } from "@reduxjs/toolkit";
import { getMyLikedTracksThunk } from "./operations";

const initialState = {
  tracks: null,
};

// Interface tracks = track[] {
//  album: {
// album_type: 'album',
// artists: Array(1),
// available_markets:
// Array(180),
// external_urls: {…},
// href: 'https://api.spotify.com/v1/albums/02w1xMzzdF2OJxTeh1basm', …
//  },
// artists: [{…}],
// available_markets: (180) ['AR', 'AU', 'AT', 'BE', 'BO', 'BR', 'BG', 'CA', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DK', 'DO', 'DE', 'EC', 'EE', 'SV', 'FI', 'FR', 'GR', 'GT', 'HN', 'HK', 'HU', 'IS', 'IE', 'IT', 'LV', 'LT', 'LU', 'MY', 'MT', 'MX', 'NL', 'NZ', 'NI', 'NO', 'PA', 'PY', 'PE', 'PH', 'PL', 'PT', 'SG', 'SK', 'ES', 'SE', 'CH', 'TW', 'TR', 'UY', 'US', 'GB', 'AD', 'LI', 'MC', 'ID', 'JP', 'TH', 'VN', 'RO', 'IL', 'ZA', 'SA', 'AE', 'BH', 'QA', 'OM', 'KW', 'EG', 'MA', 'DZ', 'TN', 'LB', 'JO', 'PS', 'IN', 'BY', 'KZ', 'MD', 'UA', 'AL', 'BA', 'HR', 'ME', 'MK', 'RS', 'SI', 'KR', 'BD', 'PK', 'LK', 'GH', 'KE', 'NG', 'TZ', 'UG', 'AG', …]
// disc_number: 1
// duration_ms: 235893
// explicit: false
// external_ids: {isrc: 'USWU30200093'}
// external_urls: {spotify: 'https://open.spotify.com/track/0COqiPhxzoWICwFCS4eZcp'}
// href: "https://api.spotify.com/v1/tracks/0COqiPhxzoWICwFCS4eZcp"
// id: "0COqiPhxzoWICwFCS4eZcp"
// is_local: false
// name: "Bring Me To Life"
// popularity: 85
// preview_url: "https://p.scdn.co/mp3-preview/d318a788a3a6a1ecb8cd0f1c924cef18832ff8d2?cid=20b0581edb28461ba06c984b0647dd71"
// track_number: 2
// type: "track"
// uri: "spotify:track:0COqiPhxzoWICwFCS4eZcp"
//}

const myLikedTracksSlice = createSlice({
  name: "myLikedTracksSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMyLikedTracksThunk.fulfilled, (state, action) => {
      const tracks = action.payload.items?.map((item) => {
        return item.track;
      });
      state.tracks = tracks;
    });
  },
});

export default myLikedTracksSlice;
