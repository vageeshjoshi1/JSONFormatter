import React, { Fragment, useState } from 'react';

const ObjectComp = ({ data = {}, generateOutput, level = 0, property = '' }) => {
  const [view, setView] = useState(false)
  if (data === null) return (
    <div style={{marginLeft: `${5*(level)}px`}}>
      null: <span className='null'>null</span>
    </div>
  )
  const { length } = Object.keys(data)
  const internal = []
  
  for (const key in data) {
    internal.push(generateOutput(data[key], level+1, key))
  }

  return <div style={{marginLeft: `${5*(level)}px`}}>
    {view ? (<i className="fas fa-caret-down" onClick={() => setView(!view)}></i>)
      : (<i className="fas fa-caret-right" onClick={() => setView(!view)}></i>)
    }
    <span> {property || 'object'} {`{ ${length} }`} </span>
    {view && internal.map((ele, index) => <Fragment key={`object-${index}-${level}`}> {ele} </Fragment>)}
  </div>
}
  

export default ObjectComp;
