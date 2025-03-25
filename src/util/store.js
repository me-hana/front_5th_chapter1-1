export const state = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const setUserInfo = (userInfo) => {
  if (userInfo) {
    state.userInfo = { ...state.userInfo, ...userInfo };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } else {
    state.userInfo = null;
    localStorage.removeItem("userInfo");
  }
};

export const getUserInfo = () => {
  if (state.userInfo) {
    return state.userInfo;
  } else return null;
};

export const isLoggedIn = () => {
  return state.userInfo ? true : false;
};
