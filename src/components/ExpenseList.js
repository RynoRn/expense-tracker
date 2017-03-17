import React from 'react';
import { List, ListItem, RaisedButton } from 'material-ui';

const sortByCreated = (a, b) => {
  if (a.createdAt > b.createdAt)
    return -1;
  if (a.createdAt < b.createdAt)
    return 1;
  return 0;
};

export const ExpenseList = ({ expenses, removeExpense, removeSummary }) => {

  const sortedExpenses = expenses.sort(sortByCreated);

  const expensesResult = sortedExpenses.map(exp => (
    <ListItem
      key={ exp.id }
      className={ exp.value > 0 ? 'color-positive' : 'color-negative' }
      primaryText={ exp.value }
      secondaryText={ `[${exp.category}] ${(new Date(exp.createdAt)).toLocaleString()}` }
      rightIcon={
        <RaisedButton
          onClick={ () => { removeExpense(exp.id); removeSummary(exp.value); } }
          backgroundColor="#a4c639"
          label={'X'}
          labelColor="#fff" />
      }
    />
  ));

  return (
    <div className="expense-list">
      <List>
        {expensesResult.length > 0 ? expensesResult : <ListItem primaryText="No expenses yet." disabled="true" />}
      </List>
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: React.PropTypes.array.isRequired,
  removeExpense: React.PropTypes.func.isRequired,
  removeSummary: React.PropTypes.func.isRequired,
};
