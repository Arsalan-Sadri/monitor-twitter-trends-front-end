import React, { useContext } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import { TweetContext } from './TweetProvider.js';
import getCounts from '../utils/countWords.js';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

function WordCloud() {
  const { tweetsState: tweets } = useContext(TweetContext);

  let words = [];
  if (tweets.length !== 0) {
    words = getCounts(tweets.reduce((acc, curr) => acc + ' ' + curr.text, ''));
  }

  return 1;
  // <>
  //   <Resizable
  //     defaultSize={{
  //       width: '100%',
  //       height: 300,
  //     }}
  //     style={resizeStyle}
  //   >
  //     <div style={{ width: '100%', height: '100%' }}>
  //       <ReactWordcloud words={words} />
  //     </div>
  //   </Resizable>
  // </>
}

export default WordCloud;
