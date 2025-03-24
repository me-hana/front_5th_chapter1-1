export const state = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const setUser = (userInfo) => {
  if (userInfo) {
    state.userInfo = { ...this.state.userInfo, ...userInfo };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
};

export const isLoggedIn = () => {
  return state.userInfo ? true : false;
};
