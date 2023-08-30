const getTrackUrisSelector = (state) => state.player?.trackUris;
const getOffsetSelector = (state) => state.player?.offset;
const getPlayStatusSelector = (state) => state.player?.playStatus;

const playerSelectors = {
   getTrackUrisSelector,
   getOffsetSelector,
   getPlayStatusSelector
  };

export default playerSelectors;
