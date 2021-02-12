import React from 'react';

const StringView = ({ level, input, property }) => ( 
  <div style={{marginLeft: `${5*(level)}px`}}>
    {property ? `${property}:` : ''} <span className="string">{`${input}`}</span>
  </div>
);

export default StringView;
