const getJwt = () => {
  return window.localStorage.getItem("jwt");
};

const setJWT = (token) => {
  window.localStorage.setItem("jwt", token);
};
const removeJWT = () => {
  window.localStorage.clear();
};
export { getJwt, setJWT, removeJWT };
