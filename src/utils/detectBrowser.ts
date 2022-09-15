import Bowser from "bowser";

export const getCurrentBrowserName = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return browser.getBrowserName();
};
