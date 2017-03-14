import React from 'react';
// import { SelectField, MenuItem } from 'material-ui';

export const CategoryList = ({ categories, category, onCategoryChange }) => (
  <div>
    <select name="expense-category" id="expense-category" value={ category } onChange={ onCategoryChange }>
      { categories.map(c => <option key={ c } value={ c }>{ c }</option>) }
    </select>

    {/*<SelectField*/}
      {/*value={ category }*/}
      {/*onChange={ onCategoryChange }*/}
      {/*maxHeight={ 200 } >*/}
        {/*{ categories.map(c => <MenuItem key={ c } value={ c } primaryText={ c } />) }*/}
    {/*</SelectField>*/}
  </div>
);

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  category: React.PropTypes.string.isRequired,
  onCategoryChange: React.PropTypes.func.isRequired
};
