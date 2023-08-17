const getNameSelector = (state) => state.profile?.name;
const getSmallImageSelector = (state) => state.profile?.smallImage;
const getLargeImageSelector = (state) => state.profile?.largeImage;
const getErrorSelector = (state) => state.profile?.error;

const profileSelectors = {
  getNameSelector,
  getSmallImageSelector,
  getLargeImageSelector,
  getErrorSelector
};

export default profileSelectors;
