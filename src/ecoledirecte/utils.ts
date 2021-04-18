export const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

export const setResponse = (data, token) => {
  const res = {
    code: 200,
    data: data,
    host: "HTTP40",
    token: token,
  };
  return res;
};