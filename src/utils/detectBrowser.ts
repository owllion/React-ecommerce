export const currentBrowserIsChrome = () => {
  return navigator.userAgent.indexOf("Chrome") > -1 ? true : false;
};
