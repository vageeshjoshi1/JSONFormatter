import React, { Fragment, useState } from 'react';

const ObjectComp = ({ data = {}, generateOutput, level = 0 }) => {
  const [view, setView] = useState(false)
  if (data === null) return (
    <div style={{marginLeft: `${10*(level) + 25}px`}}>
      null: <span className='null'>null</span>
    </div>
  )
  const { length } = Object.keys(data)
  const internal = []
  
  for (const key in data) {
    internal.push(generateOutput(data[key], level+1, key))
  }

  return <div style={{marginLeft: `${10*(level)}px`}}>
    {view ? (<i className="fas fa-caret-down w-15-px" onClick={() => setView(!view)}></i>)
      : (<i className="fas fa-caret-right w-15-px" onClick={() => setView(!view)}></i>)
    }
    &nbsp; object {`{ ${length} }`}
    {view && internal.map((ele, index) => <Fragment key={`object-${index}-${level}`}> {ele} </Fragment>)}
  </div>
}
  

export default ObjectComp;
