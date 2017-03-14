import React from 'react';

const sortByCreated = (a, b) => {
  if (a.createdAt > b.createdAt)
    return -1;
  if (a.createdAt < b.createdAt)
    return 1;
  return 0;
};

export const List = ({ expenses, removeExpense, removeSummary }) => {

  const sortedExpenses = expenses.sort(sortByCreated);

  const expensesResult = sortedExpenses.map(exp => (
    <li key={ exp.id } className={ exp.value > 0 ? 'color-positive' : 'color-negative' }>
      <span>{ (new Date(exp.createdAt)).toLocaleString() } </span>
      <span>{ exp.category } </span>
      <span>{ exp.value }</span>
      <button onClick={ () => { removeExpense(exp.id); removeSummary(exp.value); } }>Remove</button>
    </li>
  ));

  return (
    <div className="expense-list">
      <ul>
        {expensesResult.length > 0 ? expensesResult : <li>No expenses yet.</li>}
      </ul>
    </div>
  );
};

List.propTypes = {
  expenses: React.PropTypes.array.isRequired,
  removeExpense: React.PropTypes.func.isRequired,
  removeSummary: React.PropTypes.func.isRequired,
};