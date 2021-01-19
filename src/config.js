const {
  NODE_ENV = 'development',
  REACT_APP_LOCAL_SERVER,
  REACT_APP_API_ENDPOINT,
} = process.env;

module.exports = {
  BASE_ENDPOINT:
    NODE_ENV === 'development' ? REACT_APP_LOCAL_SERVER : REACT_APP_API_ENDPOINT,
};
