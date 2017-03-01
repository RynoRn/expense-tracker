import React, { Component } from 'react';
import { CategoryList } from './../category-list';

export class ActionButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedCategory: '' };

    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  render() {
    let inputExpense;

    return (
      <div className="action-buttons-wrapper">

        <CategoryList onCategoryChange={ this.onCategoryChange } />

        <input type="number" placeholder="Expense Amount" ref={node => { inputExpense = node }} />

        <button onClick={ () => this.onAddExpenseClick({ value: inputExpense.value }) }>Add Expense</button>
      </div>
    );
  }

  onAddExpenseClick({ value }) {
    if (!value.trim()) {
      return;
    }

    const { addExpense, addSummary } = this.props.actions;

    addExpense({ category: this.state.selectedCategory, value });
    addSummary(value);
  }

  onCategoryChange(value) {
    this.setState({ selectedCategory: value });
  }
}
