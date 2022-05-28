const { REACT_APP_NODE_ENV, REACT_APP_DEV_API_URL, REACT_APP_API_URL } =
  process.env;

const API_URL =
  REACT_APP_NODE_ENV === 'development'
    ? REACT_APP_DEV_API_URL
    : REACT_APP_API_URL;

export default API_URL;
