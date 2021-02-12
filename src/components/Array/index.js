import React, { Fragment, useState } from 'react';

const ArrayComp = ({ data, generateOutput, level = 0 }) => {
  const [view, setView] = useState(false)
  const { length } = data
  const internal = []
  data.forEach((item) => {
    internal.push(generateOutput(item, level+1))
  })
  return <div style={{marginLeft: `${5*(level)}px`}}>
    {view ? (<i className="fas fa-caret-down w-15-px" onClick={() => setView(!view)}></i>)
      : (<i className="fas fa-caret-right w-15-px" onClick={() => setView(!view)}></i>)
    }
    <span> array </span> {`[ ${length} ]`}
    {view && internal.map((ele, index) => <Fragment key={`array-${index}-${level}`}> {ele} </Fragment>)}
  </div>
}
  

export default ArrayComp;
