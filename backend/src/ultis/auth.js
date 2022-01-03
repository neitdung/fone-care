import jwt_decode from "jwt-decode";

export const getToken = () => {
  const tokenString = localStorage.getItem("token");
  if (!tokenString) {
    localStorage.removeItem("token");
    return false;
  } else {
    const decoded = jwt_decode(tokenString);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return tokenString;
  }
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getRole = () => {
  const tokenString = localStorage.getItem("token");
  const decoded = jwt_decode(tokenString);
  return decoded?.role;
};

export const logout = () => {
  localStorage.removeItem("token");
};
