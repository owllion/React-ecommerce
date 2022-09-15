export const currentBrowserIsSafari = () => {
  return navigator.userAgent.match(/safari/i) ? true : false;
};
