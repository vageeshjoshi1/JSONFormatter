import React from 'react';

const NullView = ({ level, property }) => ( 
  <div style={{marginLeft: `${5*(level)}px`}}>
    {property ? `${property}:` : ''} <span className="null">null</span>
  </div>
);

export default NullView;
