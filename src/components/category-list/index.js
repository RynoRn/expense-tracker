import React from 'react';

export const CategoryList = ({ categories, category, onCategoryChange }) => (
  <select name="expense-category" id="expense-category" value={ category } onChange={ onCategoryChange }>
    { categories.map(c => <option key={ c } value={ c }>{ c }</option>) }
  </select>
);

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  category: React.PropTypes.string.isRequired,
  onCategoryChange: React.PropTypes.func.isRequired
};
