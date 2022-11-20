const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.email;

const getUserToken = state => state.auth.token;

const getUserId = state => state.auth.userId;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserToken,
  getUserId,
};

export default authSelectors;
