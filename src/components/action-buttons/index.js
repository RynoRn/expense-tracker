import React from 'react';

import { CategoryList } from './../category-list';

const categories = [
  // Expenses
  'Food', 'Coffee', 'Bills', 'Taxi', 'Parking', 'Clothes', 'Lover',
  'Movies', 'Games', 'Travel', 'Sports', 'Doctor', 'Gifts', 'Family',
  'Education', 'Investment', 'Others',
  // Income
  'Salary', 'Award', 'Selling', 'Salary Bonus'
].sort();

export const ActionButtons = ({ addExpense, addSummary, resetSummary, resetExpense }) => {
  let inputExpense;
  let selectedCategory = categories[0];

  return (
    <div className="action-buttons-wrapper">
      <CategoryList categories={ categories } category={ selectedCategory } onCategoryChange={ (event) => selectedCategory = event.target.value } />

      <input type="number" placeholder="Expense Amount" ref={node => { inputExpense = node; }} />

      <button onClick={
        () => {
          const value = inputExpense.value;
          if (!value.trim()) {
            return;
          }

          addExpense({ category: selectedCategory, value });
          addSummary(value);
        }
      }>Add Expense</button>
      <button onClick={ () => { resetSummary(); resetExpense(); } }>Reset Expense</button>
    </div>
  );
};
