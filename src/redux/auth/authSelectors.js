const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.email;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
};

export default authSelectors;
