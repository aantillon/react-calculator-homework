import React from 'react';
import Key from './Key';
import '../styles/KeypadRow.css';

// @param props [object] an object that defines a `keys` attribute that points to
// an array of key definitions
const KeypadRow = (props) => {
  return(
    <div className="rows">
      {props.keys.map(key => <Key keyElement={key} key={key.value} />) }
    </div>
  );
}

export default KeypadRow;
