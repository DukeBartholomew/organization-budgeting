const getJwt = () => {
  return window.localStorage.getItem("jwt");
};

const setJWT = (token) => {
  window.localStorage.setItem("jwt", token);
};

export { getJwt, setJWT };
