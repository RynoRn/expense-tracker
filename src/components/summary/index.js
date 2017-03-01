import React, { Component } from 'react';

export class Summary extends Component {
  render() {
    const { summary } = this.props;
    const className = summary > 0 ? 'color-positive' : 'color-negative';

    return (
      <div className="summary">
        <div className={ className }>
          <h1>{ summary }</h1>
        </div>
      </div>
    );
  }
}
