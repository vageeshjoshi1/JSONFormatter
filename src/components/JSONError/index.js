import React from 'react';

const JSONError = ({ empty }) => ( 
  <div className="error">
    {empty ? (
      <div className="empty">
        <i className="fas fa-question-circle" />
        <h3>No Data</h3>
      </div>
    )
    : (
      <div className="invalid">
          <i className="fas fa-angry" />
          <h3>Error</h3>
          Invalid String
        </div>
      )
    }
  </div>
);

export default JSONError;
