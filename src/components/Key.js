import React from 'react';
import '../styles/Key.css';

// @param props [object] an object that describes a Key's
// `value, cssClasses, htmlId` properties
const Key = (props) => {
  return(
    <button
      value={props.keyElement.value}
      className={props.keyElement.cssClasses}
      id={props.keyElement.htmlId}
      onClick={props.keyPress}
    >
        {props.keyElement.value}
    </button>
  );
}

export default Key;
