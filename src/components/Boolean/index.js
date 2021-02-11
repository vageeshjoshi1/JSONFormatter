import React from 'react';

const BooleanView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${10*(level) + 25}px`}}>
    {property ? `${property}:` : ''} <span className="boolean">{`${input}`}</span>
  </div>
);

export default BooleanView;
