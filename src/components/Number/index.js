import React from 'react';

const NumberView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${5*(level)}px`}}>
    {property ? `${property}:` : ''} <span className="number">{`${input}`}</span>
  </div>
);

export default NumberView;
