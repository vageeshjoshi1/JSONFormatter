import React from 'react';

const NumberView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${10*(level) + 25}px`}}>
    {property ? `${property}:` : ''} <span className="number">{`${input}`}</span>
  </div>
);

export default NumberView;
