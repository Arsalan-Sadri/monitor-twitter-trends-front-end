import React, { useState, useEffect } from 'react';
import { BASE_ENDPOINT } from '../config.js';

export const TweetContext = React.createContext();

export function TweetProvider(props) {
  const [tweetsState, setTweets] = useState([]);

  const fetchTweets = (searchTerm) => {
    const ENDPOINT_URL = `${BASE_ENDPOINT}/v1/tweets/search/recent?query=${searchTerm}`;

    fetch(ENDPOINT_URL, {
      mode: 'no-cors',
    })
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
