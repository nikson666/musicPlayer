const getAuthTokenSelector = (state) => state.auth?.token
const getIsAuthSelector = (state) => state.auth?.isAuth

const authSelectors = {
    getAuthTokenSelector,
    getIsAuthSelector
}

export default authSelectors