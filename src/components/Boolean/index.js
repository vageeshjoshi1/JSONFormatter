import React from 'react';

const BooleanView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${5*(level)}px`}}>
    {property ? `${property}:` : ''} <span className="boolean">{`${input}`}</span>
  </div>
);

export default BooleanView;
