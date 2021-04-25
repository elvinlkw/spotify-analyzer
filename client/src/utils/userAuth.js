import queryString from "query-string";

export const getAuthCode = (location) => {
  const parsed = queryString.parse(location.search);

  return parsed?.code;
};
