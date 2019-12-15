const parseConfig = {
  appId: process.env.REACT_APP_PARSE_ID,
  appUrl: process.env.REACT_APP_PARSE_URL,
  appMasterKey: process.env.REACT_APP_PARSE_MASTERKEY
};

export function defaultHeaders() {
  return {
    "X-Parse-Application-Id": parseConfig.appId,
    "X-Parse-Master-Key": parseConfig.appMasterKey,
    "Content-Type": "application/json",
    Accept: "application/json"
  };
}
export function generateParseURL(url) {
  return parseConfig.appUrl + "/" + url;
}
export function generateParseFunctionURL(url) {
  return parseConfig.appUrl + "/functions/" + url;
}

export function generateClassURL(className) {
  return parseConfig.appUrl + "/classes/" + className;
}
