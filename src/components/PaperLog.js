import React from 'react';
import '../styles/PaperLog.css';

const LogLine = (props) => {
  return(
    <p style={{'textAlign': 'right'}}>{props.line}</p>
  );
}

const PaperLog = (props) => {
  return(
    <div className="log-output">
      { props.output.map((line) => <LogLine line={line} />) }
    </div>
  );
}

export default PaperLog;
