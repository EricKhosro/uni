export const setToken = (token: string) => {
  localStorage.setItem("tspToken", token);
};
export const getToken = () => localStorage.getItem("tspToken");

export const setTokenExpireDate = (d: string) => {
  localStorage.setItem("accessTokenExpiry", d);
};
export const getTokenExpireDate = () =>
  localStorage.getItem("accessTokenExpiry");

export const deleteToken = () => {
  localStorage.removeItem("tspToken");
};

export const deleteTokenExpireDate = () => {
  localStorage.removeItem("accessTokenExpiry");
};
