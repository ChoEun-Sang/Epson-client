export const deleteAccessTokenFromCookie = () => {
  const date = new Date();
  const expires = "expires=" + date.toUTCString();
  const cookieString = `Authorization=; ${expires}; path=/`;
  document.cookie = cookieString;
};

export const getAccessTokenFromCookie = () => {
  const cookie = document.cookie.split("; ").find((cookie) => cookie.split("=")[0] === "Authorization");
  return cookie ? cookie.split("=")[1] : null;
};
