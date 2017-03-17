import React from 'react';

import { TopToolbar } from './TopToolbar';
import { ExpenseList } from './ExpenseList';

export const App = (props) => {
  const { expenses } = props;
  const { removeExpense, removeSummary } = props.actions;

  return (
    <div className="App layout-wrapper">
      <div className="layout-top">
        <TopToolbar { ...props } />
      </div>
      <div className="layout-bottom">
        <ExpenseList expenses={ expenses } removeExpense={ removeExpense } removeSummary={ removeSummary }></ExpenseList>
      </div>
    </div>
  );
};
