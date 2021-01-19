import React, { useState, useEffect } from 'react';

export const TweetContext = React.createContext();

export function TweetProvider() {
  const [tweetsState, setTweets] = useState([]);

  const fetchTweets = (searchTerm) => {
    const BASE_ENDPOINT = 'http://localhost:5000/v1/tweets/search/recent';
    const ENDPOINT_URL = `${BASE_ENDPOINT}?query=${searchTerm}`;

    fetch(ENDPOINT_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TweetContext.Provider value={{ fetchTweets, tweetsState }}>
      {props.children}
    </TweetContext.Provider>
  );
}
