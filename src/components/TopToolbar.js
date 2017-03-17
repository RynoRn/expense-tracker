import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, TextField, RaisedButton } from 'material-ui';

import { CategoryList } from './CategoryList';
import { Summary } from './Summary';

const categories = [
  // Expenses
  'Food', 'Coffee', 'Bills', 'Taxi', 'Parking', 'Clothes', 'Lover',
  'Movies', 'Games', 'Travel', 'Sports', 'Doctor', 'Gifts', 'Family',
  'Education', 'Investment', 'Others',
  // Income
  'Salary', 'Award', 'Selling', 'Salary Bonus'
].sort();

export class TopToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedCategory: categories[0], newExpenseValue: '' };
  }

  onDropDownChange(event, key, value) {
    this.setState({ selectedCategory: value });
  }

  onInputChange(event, newValue) {
    this.setState({ newExpenseValue: newValue });
  }

  onAddExpenseClick() {
    const { addExpense, addSummary } = this.props.actions;
    const value = this.state.newExpenseValue;

    if (!value && !value.trim()) {
      return;
    }

    addExpense({ category: this.state.selectedCategory, value });
    addSummary(value);
  }

  onResetExpenseClick() {
    const { resetSummary, resetExpense } = this.props.actions;

    resetSummary();
    resetExpense();
  }

  render () {
    const { summary } = this.props;

    return (
      <Toolbar style={ { backgroundColor: '#fff' } }>
        <ToolbarGroup firstChild={ true }>
          <CategoryList categories={ categories } category={ this.state.selectedCategory } onCategoryChange={ this.onDropDownChange.bind(this) } />
          <TextField type="number" hintText="Enter your expense here..." value={ this.state.newExpenseValue } onChange={ this.onInputChange.bind(this) } />
        </ToolbarGroup>
        <ToolbarGroup lastChild={ true }>
          <RaisedButton label="Add" primary={true} onClick={ this.onAddExpenseClick.bind(this) } />
          <RaisedButton label="Reset" secondary={true} onClick={ this.onResetExpenseClick.bind(this) } />
          <Summary summary={ summary }></Summary>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
