import React, { Component } from 'react';

import './List.css';

export class List extends Component {
  render() {
    const expensesCopy = this.props.expenses.slice(0);

    const sortedExpenses = expensesCopy.sort((a,b) => {
        if (a.createdAt > b.createdAt)
          return -1;
        if (a.createdAt < b.createdAt)
          return 1;
        return 0;
      });

    const expenses = sortedExpenses.map(exp => (
      <li key={ exp.id } className={ exp.value > 0 ? 'color-positive' : 'color-negative' }>
        <span>{ (new Date(exp.createdAt)).toLocaleString() } </span>
        <span>{ exp.category } </span>
        <span>{ exp.value }</span>
        <button onClick={ () => this.onRemoveButtonClick(exp.id, exp.value) }>Remove</button>
      </li>
    ));

    return (
      <div className="expense-list">
        <ul>
          {expenses.length > 0 ? expenses : <li>No expenses yet.</li>}
        </ul>
      </div>
    );
  }

  onRemoveButtonClick(id, value) {
    this.props.actions.removeExpense(id)
    this.props.actions.removeSummary(value)
  }
}
