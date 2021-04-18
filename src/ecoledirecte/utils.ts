const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

export default convertBody;
