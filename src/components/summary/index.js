import React from 'react';

export const Summary = ({ summary }) => (
  <div className="summary">
    <div className={ summary > 0 ? 'color-positive' : 'color-negative' }>
      <h1>{ summary }</h1>
    </div>
  </div>
);

Summary.propTypes = {
  summary: React.PropTypes.number.isRequired
};