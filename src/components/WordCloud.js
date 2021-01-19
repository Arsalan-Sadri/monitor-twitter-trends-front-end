import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import words from './words.js';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

function WordCloud() {
  return (
    <>
      <Resizable
        defaultSize={{
          width: '100%',
          height: 300,
        }}
        style={resizeStyle}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <ReactWordcloud words={words} />
        </div>
      </Resizable>
    </>
  );
}

export default WordCloud;
