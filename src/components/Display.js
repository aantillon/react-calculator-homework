import React from 'react';
import '../styles/Display.css';

const Display = (props) => {
  return (
    <div id="display">{props.output}</div>
  );
}

export default Display;
