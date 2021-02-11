import React from 'react';

const NullView = ({ level, property }) => ( 
  <div style={{marginLeft: `${10*(level) + 25}px`}}>
    {property ? `${property}:` : ''} <span className="null">null</span>
  </div>
);

export default NullView;
