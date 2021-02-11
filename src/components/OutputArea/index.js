import React, { Fragment } from 'react';

const OutputArea = ({ output }) => (
  <div className="output-area">
    {output.map((ele, index) => <Fragment key={`output-${index}`}> {ele} </Fragment>)}
  </div>
);

export default OutputArea;