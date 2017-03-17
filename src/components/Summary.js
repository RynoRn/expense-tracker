import React from 'react';

export const Summary = ({ summary }) => (
  <div className="summary">
    <div className={ summary > 0 ? 'color-positive' : 'color-negative' }>
      <div className="summary-value">$ { summary }</div>
    </div>
  </div>
);

Summary.propTypes = {
  summary: React.PropTypes.number.isRequired
};
