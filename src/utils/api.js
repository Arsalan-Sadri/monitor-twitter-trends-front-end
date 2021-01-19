import { BASE_ENDPOINT } from '../config.js';

const apis = {
  matchAllTweets: async () => {
    const res = await fetch(`${BASE_ENDPOINT}/v1/tweets`);
    return await res.json();
  },
};

export default apis;
