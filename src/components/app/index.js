import './App.css';

import React from 'react';

import { List } from './../../components/list';
import { ActionButtons } from './../../components/action-buttons';
import { Summary } from './../../components/summary';

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
