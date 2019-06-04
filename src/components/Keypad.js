import React from 'react';
import KeypadRow from './KeypadRow';
import '../styles/Keypad.css';

const config = require('../config');

const Keypad = () => {
  return (
    <div id="keypad">
      { config.keyRows.map(row => <KeypadRow keys={row.keys} key={row.id} />) }
    </div>
  );
}

export default Keypad;
