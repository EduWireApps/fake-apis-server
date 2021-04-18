export const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

export const setResponse = (data, token, isData = true) => {
  let res = {
    code: 200,
    host: "HTTP40",
    token: token,
    data,
  };
  if (isData) res.data = data;
  return res;
};
