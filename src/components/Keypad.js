import React from 'react';
import '../styles/KeypadRow.css';
import '../styles/Keypad.css';
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

const Keypad = (props) => {
  return (
    <div id="keypad">
      <div className="rows">
        <Key keyElement={{ value: "Del", cssClasses: "del-bg", htmlId: "delete" }} key="Del" keyPress={props.deleteKeyFn} />
        <Key keyElement={{ value: "%", cssClasses: "btn-style operator opera-bg fall-back" }} key="%" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: "+", cssClasses: "btn-style opera-bg value align operator" }} key="+" keyPress={props.keyPressFn} />
      </div>
      <div className="rows">
        <Key keyElement={{ value: 7, cssClasses: "btn-style num-bg num first-child" }} key="7" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 8, cssClasses: "btn-style num-bg num" }} key="8" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 9, cssClasses: "btn-style num-bg num" }} key="9" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: "-", cssClasses: "btn-style opera-bg operator" }} key="-" keyPress={props.keyPressFn} />
      </div>
      <div className="rows">
        <Key keyElement={{ value: 4, cssClasses: "btn-style num-bg num first-child" }} key="4" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 5, cssClasses: "btn-style num-bg num" }} key="5" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 6, cssClasses: "btn-style num-bg num" }} key="6" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: "*", cssClasses: "btn-style opera-bg operator" }} key="*" keyPress={props.keyPressFn} />
      </div>
      <div className="rows">
        <Key keyElement={{ value: 1, cssClasses: "btn-style num-bg num first-child" }} key="1" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 2, cssClasses: "btn-style num-bg num" }} key="2" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: 3, cssClasses: "btn-style num-bg num" }} key="3" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: "/", cssClasses: "btn-style opera-bg operator" }} key="/" keyPress={props.keyPressFn} />
      </div>
      <div className="rows">
        <Key keyElement={{ value: 0, cssClasses: "num-bg zero", htmlId: "delete" }} key="0" keyPress={props.keyPressFn} />
        <Key keyElement={{ value: ".", cssClasses: "btn-style num-bg period fall-back" }} key="." keyPress={props.keyPressFn} />
        <Key keyElement={{ value: "=", cssClasses: "eqn align", htmlId: "eqn-bg" }} key="=" keyPress={props.calculateFn} />
      </div>
    </div>
  );
}

export default Keypad;
