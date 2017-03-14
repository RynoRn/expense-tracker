import React from 'react';

import { List } from './List';
import { ActionButtons } from './ActionButtons';
import { Summary } from './Summary';

export const App = (props) => {
  const { summary, expenses } = props;
  const { removeExpense, removeSummary, addExpense, addSummary, resetSummary, resetExpense } = props.actions;

  return (
    <div className="App layout-wrapper">
      <div className="layout-top">
        <ActionButtons addExpense={ addExpense } addSummary={ addSummary } resetSummary={ resetSummary } resetExpense={ resetExpense }></ActionButtons>
        <Summary summary={ summary }></Summary>
      </div>
      <div className="layout-bottom">
        <List expenses={ expenses } removeExpense={ removeExpense } removeSummary={ removeSummary }></List>
      </div>
    </div>
  );
};
