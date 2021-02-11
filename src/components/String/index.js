import React from 'react';

const StringView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${10*(level) + 25}px`}}>
    {property ? `${property}:` : ''} <span className="string">{`${input}`}</span>
  </div>
);

export default StringView;
