export const deleteAccessTokenFromCookie = () => {
  const date = new Date();
  const expires = "expires=" + date.toUTCString();
  const cookieString = `Authorization=; ${expires}; path=/`;
  document.cookie = cookieString;
};
