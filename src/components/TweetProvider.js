import React, { useState, useEffect } from 'react';
import { BASE_ENDPOINT } from '../config.js';
import api from '../utils/api.js';

export const TweetContext = React.createContext();

export function TweetProvider(props) {
  const [tweetsState, setTweets] = useState([]);

  useEffect(() => {
    
    (async function run() {
      const tweets = await api.matchAllTweets();
      setTweets(tweets);
    })();
  }, []);

  const fetchTweets = (searchTerm) => {
    const ENDPOINT_URL = `${BASE_ENDPOINT}/v1/tweets/search/recent?query=${searchTerm}`;

    fetch(ENDPOINT_URL)
      .then((response) => response.json())
      .then((tweets) => {
        setTweets(tweets);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TweetContext.Provider value={{ fetchTweets, tweetsState }}>
      {props.children}
    </TweetContext.Provider>
  );
}
